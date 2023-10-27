import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Icon } from "@/components";
import React, { Fragment } from "react";
import { DropdownBase } from "@/types";

interface DropdownProps<T> {
  children: React.ReactNode;
  className?: string;
  items: T[];
  handleClick: (value: T) => void;
  size?: "sm" | "md";
}

export const Dropdown = <T extends DropdownBase>({
  children,
  items,
  className = "",
  handleClick,
  size = "md",
}: DropdownProps<T>) => {
  const sizes = {
    sm: "px-3 py-[6px] text-xs rounded-lg",
    md: " py-3 px-5 text-sm rounded-primary",
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={classNames(
            "flex items-center justify-center border border-gray-600 text-secondary bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary",
            sizes[size],
            className
          )}
        >
          <span className="whitespace-nowrap">{children}</span>
          <Icon icon="solid-angle-down-small" className="w-5 h-5 ml-2 -mr-1 text-white" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-gray-900 rounded-md shadow-xl ring-1 ring-gray-600 ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <button
                    value={item.value}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      const val = items.find((value) => value.value === (e.target as HTMLButtonElement).value);
                      if (val) handleClick(val);
                    }}
                    className={classNames(
                      active ? "bg-gray-600 text-white" : "text-secondary",
                      "block px-4 py-2 text-sm w-full"
                    )}
                  >
                    {item.name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
