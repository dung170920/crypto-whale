import classNames from "classnames";

interface ButtonProps {
  type?: "outlined" | "filled";
  size?: "lg" | "md" | "sm";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  onClick,
  type = "filled",
  color = "primary",
  size = "md",
  disabled = false,
}: ButtonProps) => {
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
    sm: "px-6 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        buttonConfig[size],
        type === "outlined" ? buttonConfig[color].outline : buttonConfig[color].bgColor,
        `w-full rounded-2xl ${className}`,
        {
          "bg-opacity-10": disabled,
        }
      )}
    >
      {children}
    </button>
  );
};
