import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Icon } from "@/components";
import React, { Fragment } from "react";

type Base = {
  name: string;
  value: string;
};

interface DropdownProps<T> {
  children: React.ReactNode;
  className?: string;
  items: T[];
  handleClick: (value: T) => void;
}

export const Dropdown = <T extends Base>({ children, items, className = "", handleClick }: DropdownProps<T>) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={classNames(
            "flex items-center justify-center gap-x-2 rounded-xl border border-gray-200 py-2 px-4 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo focus:ring-offset-2 focus:ring-offset-gray-100",
            className
          )}
        >
          {children}
          <Icon icon="solid-angle-down-small" className="w-5 h-5 ml-2 -mr-1" />
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
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <button
                    value={item.value}
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                      const val = items.find((item) => item.value === (e.target as HTMLButtonElement).value);
                      if (val) handleClick(val);
                    }}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
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
