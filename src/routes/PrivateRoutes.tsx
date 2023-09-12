import { Main } from "@/layouts";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const DashboardPage = lazy(() => import("@/pages/Dashboard"));

const Authenticated = ({ children }: { children: React.ReactElement }) => {
  const auth = false;

  return auth ? children : <Navigate to="/auth/login" />;
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
