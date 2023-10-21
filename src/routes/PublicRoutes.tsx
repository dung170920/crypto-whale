import { Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";
import { Auth, Blank } from "@/layouts";
import { path } from "@/constants";

const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPassword"));
const VerificationCodePage = lazy(() => import("@/pages/VerificationCode"));

const NotFoundPage = lazy(() => import("@/pages/NotFound"));

export const PublicRoutes: RouteObject[] = [
  {
    path: path.auth,
    element: <Auth />,
    children: [
      {
        path: path.auth,
        element: <Navigate to={path.login} replace />,
      },
      {
        path: path.login,
        element: <LoginPage />,
      },
      {
        path: path.signup,
        element: <RegisterPage />,
      },
      {
        path: path.forgotPassword,
        element: <ForgotPasswordPage />,
      },
      {
        path: path.verification,
        element: <VerificationCodePage />,
      },
    ],
  },
  {
    path: path.home,
    element: <Blank />,
    children: [
      { path: path.notFound, element: <NotFoundPage /> },
      { path: path.error, element: <Navigate to={path.notFound} replace /> },
    ],
  },
];
