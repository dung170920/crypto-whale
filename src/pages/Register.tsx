import { Button, Icon, Input } from "@/components";
import { RouteList } from "@/routes";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const Register = () => {
  const tabs = [
    { name: "Login", href: RouteList.login },
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
      <form onSubmit={() => {}}>
        <Input name="email" placeholder="Email Address" icon="envelope" />
        <Input name="password" placeholder="Password" icon="lock" isPassword />
        <Input name="code" placeholder="Referral code (Optional)" icon="user" />
        <Button size="md" type="filled" className="flex items-center justify-center">
          <span className="flex-1">Continue</span>
          <div className="p-2 bg-white/20 rounded-xl flex items-center justify-center">
            <Icon icon="solid-arrow-right" className="h-4 w-4" />
          </div>
        </Button>
      </form>
    </>
  );
};

export default Register;
