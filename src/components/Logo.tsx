import LogoIcon from "@/assets/svgs";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-end gap-3">
      <LogoIcon />
      <span className="text-xl font-semibold">Whale.</span>
    </Link>
  );
};
