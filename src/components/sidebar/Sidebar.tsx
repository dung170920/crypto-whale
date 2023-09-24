import { Icon, Logo } from "@/components";
import { sideLinks } from "@/constants";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="h-screen bg-gray-800 w-[252px] flex flex-col">
      <div className="flex items-center justify-center p-6 border-b-2 border-r-2 border-gray-700 relative">
        <Logo />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-gray-800 h-11 w-11 border-2 rounded-full border-gray-700">
          <Icon icon="angle-left" className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <div className="flex flex-col items-center flex-1 py-5 overflow-hidden">
        <div className="w-full px-6">
          <div className="w-14 h-14 mx-auto overflow-hidden rounded-primary">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="mt-3 font-semibold text-center">Erfan Amade</h4>
          <p className="text-center">
            <span className="text-sm">verified</span>
            <Icon icon="solid-badge-check" className="w-5 h-5 ml-1 text-primary" />
          </p>
        </div>
        <div className="w-full px-6 mt-4 overflow-y-auto">
          <ul className="flex flex-col w-full h-full">
            {sideLinks.map((child) => (
              <NavLink
                to={child.to}
                className={({ isActive }) =>
                  classNames(
                    "px-5 py-3.5 rounded-primary w-full",
                    isActive ? "bg-primary font-bold" : "bg-transparent hover:text-primary"
                  )
                }
                key={child.to}
              >
                <Icon icon={child.icon} className="w-6 h-6 mr-3" />
                <span
                  className={classNames({
                    "relative after:absolute after:-top-5 after:-right-9 after:text-white after:bg-orange after:content-['New'] after:px-[6px] after:rounded-md after:text-2xs mr-7 before:border-8 before:border-orange before:border-t-transparent before:border-r-transparent before:border-b-transparent before:absolute before:-top-2 before:-right-6":
                      child.isNew,
                  })}
                >
                  {child.text}
                </span>
              </NavLink>
            ))}
          </ul>
          <div className="flex flex-col">
            <span className="text-sm">Insignts</span>
            <NavLink
              to="/inbox"
              className={({ isActive }) =>
                classNames(
                  "px-5 py-4 rounded-primary w-full flex items-center",
                  isActive ? "bg-primary font-bold" : "bg-transparent hover:text-primary"
                )
              }
            >
              <Icon icon="comment" className="w-6 h-6 mr-3" />
              <span>Inbox</span>
              <div className="bg-red h-5 w-5 rounded-md text-sm ml-2 text-center text-white">5</div>
            </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
};
