import { Button, Input, Icon, IconButton } from "@/components";
import { Apple, FB, Google } from "@/assets";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { path } from "@/constants";

const Login = () => {
  const loginMethods = [FB, Apple, Google];
  const tabs = [
    { name: "Login", href: path.login },
    { name: "Sign Up", href: path.signup },
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
          <Link to={path.forgotPassword} className="float-right mb-3 text-sm text-primary">
            Forgot Password?
          </Link>
          <Button size="md" type="filled" className="flex items-center justify-center">
            <span className="flex-1">Continue</span>
            <div className="flex items-center justify-center p-2 bg-white/20 rounded-xl">
              <Icon icon="solid-arrow-right" className="w-4 h-4" />
            </div>
          </Button>
        </form>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-2/3">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-500" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 text-sm font-semibold text-white bg-gray-800">Or Continue with</span>
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
