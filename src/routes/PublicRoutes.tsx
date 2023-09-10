import { Navigate } from "react-router-dom";
import { lazy } from "react";
import { Auth } from "@/layouts";

const LoginPage = lazy(() => import("@/pages/Login"));
const RegisterPage = lazy(() => import("@/pages/Register"));
const ForgotPasswordPage = lazy(() => import("@/pages/ForgotPassword"));
const AuthConfirmPage = lazy(() => import("@/pages/AuthConfirm"));
const VerificationCodePage = lazy(() => import("@/pages/VerificationCode"));

export const PublicRoutes = [
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
];
