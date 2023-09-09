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
  ];

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <main className="py-5 px-5 container xl:px-[300px] lg:py-8 h-full overflow-hidden">
        <section className="bg-gray-900 p-4 rounded-6xl flex h-full">
          <div className="w-1/2 bg-gray-800 px-16 py-8 rounded-6xl h-full overflow-y-auto flex flex-col">
            <h2 className="text-title">{texts.find((e) => e.path === location.pathname)?.title}</h2>
            <p className="text-secondary mt-1 mb-2">{texts.find((e) => e.path === location.pathname)?.subTitle}</p>

            <Outlet />
          </div>

          <div className="w-1/2 flex flex-col justify-center items-center">
            <QrCode className="w-48 h-48" />
            <h3 className="font-bold text-2xl mt-6 mb-1">Login With QR code</h3>
            <span>
              Scan QR code with <span className="text-primary font-bold">app</span>
            </span>
            <a
              href="#"
              className="w-2/3 mt-8 mb-20 p-1 rounded-full bg-gray-700 flex items-center overflow-hidden"
              target="_blank"
            >
              <span className="px-3 bg-primary rounded-full h-6">
                <Icon icon="solid-lock" className="h-5 w-5" />
              </span>
              <span className="text-xs text-center flex-1 px-1">
                <span className="text-primary">https:</span>//www.cryptowhale.com
              </span>
            </a>
            <p className="w-2/3 text-center text-sm text-secondary">Whale.io, Trade anything anywhere with Whale.io!</p>
          </div>
        </section>
      </main>
    </div>
  );
};
