import { Icon } from "@/components";
import { useState } from "react";

interface InputProps {
  label?: string;
  name: string;
  placeholder: string;
  icon?: string;
  isPassword?: boolean;
}

export const Input = ({ label, name, placeholder, icon, isPassword = false }: InputProps) => {
  const [inputVisibility, setInputVisibility] = useState(false);

  return (
    <div className="mb-5">
      <label htmlFor={name} className="font-semibold">
        {label}
      </label>
      <div className="relative mt-2 px-5 rounded-3xl bg-gray-700 flex items-center border border-transparent focus-within:border-primary focus-within:ring-primary">
        {icon && (
          <div className="border-r border-gray-500 pr-3">
            <Icon className="h-6 w-6 text-white" icon={icon} />
          </div>
        )}
        <input
          type={isPassword && !inputVisibility ? "password" : "text"}
          name={name}
          id={name}
          className="caret-primary ml-3 flex-1 py-5 sm:text-sm h-full"
          placeholder={placeholder}
        />
        {isPassword && (
          <div className="absolute right-5 cursor-pointer" onClick={() => setInputVisibility(!inputVisibility)}>
            <Icon className="h-6 w-6 text-white" icon={inputVisibility ? "eye-slash" : "eye"} />
          </div>
        )}
      </div>
    </div>
  );
};
