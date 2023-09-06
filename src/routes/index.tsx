import { useRoutes } from "react-router-dom";
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

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          index: true,
          element: <LoginPage />,
        },
      ],
    },
  ]);
}
