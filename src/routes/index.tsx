import { Outlet, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { Loading } from "@/components";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

const Loadable = () => (
  <Suspense fallback={<Loading />}>
    <Outlet />
  </Suspense>
);

export function Router() {
  return useRoutes([
    {
      element: <Loadable />,
      children: [...PrivateRoutes, ...PublicRoutes],
    },
  ]);
}
