import IcoMoon from "react-icomoon";
import iconSet from "@/assets/icons/icon.json";

interface IconProps {
  icon: string;
  className?: string;
}

export const Icon = ({ icon, className }: IconProps) => {
  return <IcoMoon iconSet={iconSet} icon={icon} className={className} />;
};
