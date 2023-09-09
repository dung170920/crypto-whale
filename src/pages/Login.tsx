import { Button, Input, Icon, IconButton } from "@/components";
import { Apple, FB, Google } from "@/assets";
import { Link, NavLink } from "react-router-dom";
import { Routes } from "@/routes";
import classNames from "classnames";

const Login = () => {
  const loginMethods = [FB, Apple, Google];
  const tabs = [
    { name: "Login", href: Routes.login },
    { name: "Sign Up", href: "/auth/signup" },
  ];

  return (
    <>
      <ul className="hidden sm:flex gap-2 bg-gray-700 w-fit px-2 py-[6px] rounded-primary mb-3">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.href}
            className={({ isActive }) =>
              classNames({ "bg-primary ": isActive }, "py-[7px] px-[18px] text-sm rounded-2xl text-white")
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </ul>
      <div className="flex flex-col justify-between flex-1">
        <form onSubmit={() => {}}>
          <Input name="email" placeholder="Email Address" icon="envelope" />
          <Input name="password" placeholder="Password" icon="lock" isPassword />
          <Link to="/auth/forgot-password" className="float-right text-sm text-primary mb-3">
            Forgot Password?
          </Link>
          <Button size="md" type="filled" className="flex items-center justify-center">
            <span className="flex-1">Continue</span>
            <div className="p-2 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon icon="solid-arrow-right" className="h-4 w-4" />
            </div>
          </Button>
        </form>

        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="relative w-2/3">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-500" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-800 px-3 text-sm font-semibold text-white">Or Continue with</span>
            </div>
          </div>
          <div className="flex gap-5">
            {loginMethods.map((Item, index) => (
              <IconButton key={index} icon={<Item />} color="secondary" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
