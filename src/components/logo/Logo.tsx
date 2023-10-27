import { LogoIcon } from "@/assets";
import { path } from "@/constants";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={path.home} className="flex items-end gap-3">
      <LogoIcon />
      <span className="text-xl font-semibold">Whale.</span>
    </Link>
  );
};
