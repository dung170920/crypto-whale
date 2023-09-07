import { Navigate, useRoutes } from "react-router-dom";
import { Attributes, lazy, LazyExoticComponent, Suspense } from "react";
import { Loading } from "@/components";
import { Auth } from "@/layouts";

const loadable = (Component: LazyExoticComponent<() => JSX.Element>) => (props: Attributes) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

//auth
const LoginPage = loadable(lazy(() => import("@/pages/Login")));
const DashboardPage = loadable(lazy(() => import("@/pages/Dashboard")));

export default function Router() {
  return useRoutes([
    { path: "/", element: <DashboardPage /> },
    {
      path: "/auth",
      element: <Auth />,
      children: [
        {
          index: true,
          element: <Navigate to={"login"} />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
}
