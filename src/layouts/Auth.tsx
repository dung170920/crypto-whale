import { QrCode } from "@/assets";
import { Header, Icon } from "@/components";
import { Outlet, useLocation } from "react-router-dom";

export const Auth = () => {
  const location = useLocation();

  const texts = [
    { path: "/auth/login", title: "Welcome back", subTitle: "Please enter your email and password." },
    { path: "/auth/signup", title: "Create Your Account", subTitle: "Setting up an account takes less than 1 minute." },
    {
      path: "/auth/forgot-password",
      title: "Forgot password",
      subTitle: "Enter your email below, you will receive an email with password reset link.",
    },
    {
      path: "/auth/verification",
      title: "Email Verification",
      subTitle: "Please enter the 4-digit verification code that was sent to your email.",
    },
  ];

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      <main className="py-5 px-5 container xl:px-[300px] lg:py-8 h-full overflow-hidden">
        <section className="flex h-full p-4 bg-gray-900 rounded-6xl">
          <div className="flex flex-col w-1/2 h-full px-16 py-8 overflow-y-auto bg-gray-800 rounded-6xl">
            <h2 className="text-title">{texts.find((e) => e.path === location.pathname)?.title}</h2>
            <p className="mt-1 mb-2 text-secondary">{texts.find((e) => e.path === location.pathname)?.subTitle}</p>

            <Outlet />
          </div>

          <div className="flex flex-col items-center justify-center w-1/2">
            <QrCode className="w-48 h-48" />
            <h3 className="mt-6 mb-1 text-2xl font-bold">Login With QR code</h3>
            <span>
              Scan QR code with <span className="font-bold text-primary">app</span>
            </span>
            <a
              href="#"
              className="flex items-center w-2/3 p-1 mt-8 mb-20 overflow-hidden bg-gray-700 rounded-full"
              target="_blank"
            >
              <span className="h-6 px-3 rounded-full bg-primary">
                <Icon icon="solid-lock" className="w-5 h-5" />
              </span>
              <span className="flex-1 px-1 text-xs text-center">
                <span className="text-primary">https:</span>//www.cryptowhale.com
              </span>
            </a>
            <p className="w-2/3 text-sm text-center text-secondary">Whale.io, Trade anything anywhere with Whale.io!</p>
          </div>
        </section>
      </main>
    </div>
  );
};
