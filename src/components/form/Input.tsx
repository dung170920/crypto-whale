import { Icon } from "@/components";
import { useState } from "react";

interface InputProps {
  label?: string;
  name: string;
  placeholder: string;
  icon?: string;
  isPassword?: boolean;
  className?: string;
}

export const Input = ({ label, name, placeholder, icon, isPassword = false, className }: InputProps) => {
  const [inputVisibility, setInputVisibility] = useState(false);

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <div className="relative flex items-center px-5 mt-2 bg-gray-700 border border-transparent rounded-3xl focus-within:border-primary focus-within:ring-primary">
        {icon && (
          <div className="pr-3 border-r border-gray-500">
            <Icon className="w-6 h-6 text-white" icon={icon} />
          </div>
        )}
        <input
          type={isPassword && !inputVisibility ? "password" : "text"}
          name={name}
          id={name}
          className="h-full py-5 ml-3 caret-primary"
          placeholder={placeholder}
        />
        {isPassword && (
          <div className="absolute cursor-pointer right-5" onClick={() => setInputVisibility(!inputVisibility)}>
            <Icon className="w-6 h-6 text-white" icon={inputVisibility ? "eye-slash" : "eye"} />
          </div>
        )}
      </div>
    </div>
  );
};
