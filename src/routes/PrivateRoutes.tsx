import { path } from "@/constants";
import { Main } from "@/layouts";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const DashboardPage = lazy(() => import("@/pages/dashboard/Dashboard"));

const Authenticated = ({ children }: { children: React.ReactElement }) => {
  const auth = true;

  return auth ? children : <Navigate to={path.login} />;
};

export const PrivateRoutes: RouteObject[] = [
  {
    element: (
      <Authenticated>
        <Main />
      </Authenticated>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
];
