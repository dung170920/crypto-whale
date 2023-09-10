import { lazy } from "react";

const DashboardPage = lazy(() => import("@/pages/Dashboard"));

export const PrivateRoutes = [{ index: true, element: <DashboardPage /> }];
