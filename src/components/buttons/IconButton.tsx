import classNames from "classnames";
import { Icon } from "@/components";

interface IconButtonProps {
  type?: "outlined" | "filled";
  size?: "md" | "sm";
  color?: "primary" | "secondary";
  icon: string | JSX.Element;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
}

export const IconButton = ({
  icon,
  className = "",
  onClick,
  type = "filled",
  color = "primary",
  size = "md",
  disabled = false,
}: IconButtonProps) => {
  const buttonConfig = {
    // Colors
    primary: {
      bgColor: "bg-primary enabled:hover:bg-opacity-80 text-white",
      outline: "border border-primary text-primary bg-primary bg-opacity-0 enabled:hover:bg-opacity-10",
    },
    secondary: {
      bgColor: "bg-gray-700 enabled:hover:bg-opacity-80 text-white",
      outline: "border border-gray-600 text-gray-500 bg-gray-600 bg-opacity-0 enabled:hover:bg-opacity-10",
    },

    // Sizes
    sm: "p-3",
    md: "p-[18px]",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "flex items-center justify-center cursor-pointer",
        buttonConfig[size],
        type === "outlined" ? buttonConfig[color].outline : buttonConfig[color].bgColor,
        `rounded-primary ${className}`,
        {
          "bg-opacity-10": disabled,
        }
      )}
    >
      {typeof icon === "string" ? <Icon icon={icon} className="w-6 h-6" /> : icon}
    </button>
  );
};
