import { QrCode } from "@/assets";
import { Header, Icon } from "@/components";
import { Routes } from "@/routes";
import classNames from "classnames";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export const Auth = () => {
  const location = useLocation();

  const tabs = [
    { name: "Login", href: Routes.login, current: true },
    { name: "Sign Up", href: "/auth/signup", current: false },
  ];

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="py-5 px-5 container lg:px-[218px] lg:py-10 h-full">
        <div className="bg-gray-900 py-6 px-4 rounded-6xl grid grid-cols-2 h-full">
          <div className="col-span-1 overflow-y-auto bg-gray-800 px-16 py-12 rounded-6xl">
            <h2 className="text-title">
              {location.pathname !== "/auth/login" ? "Create Your Account" : "Welcome back"}
            </h2>
            <p className="text-secondary mt-1 mb-5">Please Enter your email and password</p>
            <ul className="hidden sm:flex gap-2 bg-gray-700 w-fit px-2 py-[6px] rounded-primary mb-7">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.name}
                  to={tab.href}
                  className={({ isActive }) =>
                    classNames(
                      { "bg-primary py-[7px] px-[18px]": isActive },
                      "px-3 py-2 text-sm rounded-2xl text-white"
                    )
                  }
                >
                  {tab.name}
                </NavLink>
              ))}
            </ul>
            <Outlet />
          </div>
          <div className="col-span-1 -mr-px flex flex-col justify-center items-center">
            <QrCode className="w-48 h-48" />
            <h3 className="font-bold text-2xl mt-6 mb-1">Login With QR code</h3>
            <span>
              Scan QR code with <span className="text-primary font-bold">app</span>
            </span>
            <a href="#" className="mt-8 p-1 rounded-full bg-gray-700">
              <span className="py-1 px-3 bg-primary rounded-full">
                <Icon icon="solid-lock" className="h-4 w-4" />
              </span>
              <span className="text-xs">
                <span className="text-primary">https:</span>//www.cryptowhale.com
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
