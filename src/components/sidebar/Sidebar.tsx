import { Icon, Logo } from "@/components";
import { sideLinks } from "@/constants";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="h-screen bg-gray-800 w-[252px] flex flex-col">
      <div className="flex items-center justify-center p-6 border-b-2 border-r-2 border-gray-700">
        <Logo />
      </div>
      <div className="flex flex-col items-center flex-1 py-6 overflow-hidden">
        <div className="w-full px-6">
          <div className="w-16 h-16 mx-auto overflow-hidden rounded-primary">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="mt-4 font-semibold text-center">Erfan Amade</h4>
          <p className="text-center">
            <span className="text-sm">verified</span>
            <Icon icon="solid-badge-check" className="w-4 h-4 ml-1 text-primary" />
          </p>
        </div>
        <div className="w-full px-6 mt-6 overflow-y-auto">
          {sideLinks.map((e) => (
            <div className="first:mb-4" key={e.title}>
              <span className="text-sm">{e.title}</span>
              <ul className="flex flex-col w-full h-full">
                {e.children.map((child) => (
                  <NavLink
                    to={child.to}
                    className={({ isActive }) =>
                      classNames(
                        "px-5 py-4 rounded-primary w-full",
                        isActive ? "bg-primary font-bold" : "bg-transparent"
                      )
                    }
                    key={child.to}
                  >
                    <Icon icon={child.icon} className="w-6 h-6 mr-3" />
                    <span>{child.text}</span>
                  </NavLink>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
