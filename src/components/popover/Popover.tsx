import { Icon } from "@/components";
import { Popover as PopoverUI, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

export const Popover = ({
  contentClassName,
  trigger,
  content,
  hasIcon = false,
  className,
  header,
}: {
  trigger: ReactNode;
  contentClassName?: string;
  className?: string;
  header: string;
  content: ReactNode;
  hasIcon?: boolean;
}) => {
  return (
    <PopoverUI className={`relative ${className}`}>
      {({ open, close }) => (
        <>
          <PopoverUI.Button className="px-5 py-4 focus:outline-none bg-dark rounded-primary">
            {trigger}
            {hasIcon && (
              <Icon icon={open ? "solid-angle-up-small" : "solid-angle-down-small"} className="w-6 h-6 ml-2" />
            )}
          </PopoverUI.Button>
          <PopoverUI.Overlay className="fixed inset-0 bg-black opacity-60" />
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverUI.Panel
              className={`absolute right-2 z-10 mt-3 w-max px-4 text-white py-9 bg-dark rounded-3xl lg:px-8 overflow-hidden ${contentClassName}`}
            >
              <div className="flex items-center gap-7">
                <button className="flex items-center justify-center bg-black h-11 w-11 rounded-xl" onClick={close}>
                  <Icon icon="solid-times" className="w-6 h-6" />
                </button>
                <span className="text-lg font-semibold">{header}</span>
                <button className="flex items-center justify-center h-11 w-11">
                  <Icon icon="solid-more-vertical" className="w-6 h-6" />
                </button>
              </div>
              <div className="my-5 h-[2px] bg-black lg:-mx-8 -mx-4"></div>
              <div className="">{content}</div>
            </PopoverUI.Panel>
          </Transition>
        </>
      )}
    </PopoverUI>
  );
};
