import { Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";
import { Auth, Blank } from "@/layouts";

const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPassword"));
const AuthConfirmPage = lazy(() => import("@/pages/AuthConfirm"));
const VerificationCodePage = lazy(() => import("@/pages/VerificationCode"));

const NotFoundPage = lazy(() => import("@/pages/NotFound"));

export const PublicRoutes: RouteObject[] = [
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Navigate to={"login"} replace />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <RegisterPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "confirm",
        element: <AuthConfirmPage />,
      },
      {
        path: "verfication",
        element: <VerificationCodePage />,
      },
    ],
  },
  {
    path: "*",
    element: <Blank />,
    children: [
      { path: "404", element: <NotFoundPage /> },
      { path: "*", element: <Navigate to="404" replace /> },
    ],
  },
];
