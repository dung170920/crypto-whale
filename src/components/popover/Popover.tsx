import { Icon } from "@/components";
import { Popover as PopoverUI, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";
import { usePopper } from "react-popper";

interface PopoverProps {
  trigger: ReactNode;
  contentClassName?: string;
  className?: string;
  header: string;
  content: ReactNode;
  hasIcon?: boolean;
  placement?:
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "top-start"
    | "top-end"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "right"
    | "right-start"
    | "right-end"
    | "left"
    | "left-start"
    | "left-end";
}

export const Popover = ({
  contentClassName = "",
  trigger,
  content,
  hasIcon = false,
  className = "",
  header,
  placement = "bottom-end",
}: PopoverProps) => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [{ name: "arrow" }],
  });

  return (
    <PopoverUI className={`${className}`}>
      {({ open, close }) => (
        <>
          <PopoverUI.Button
            className="px-5 py-4 bg-gray-700 focus:outline-none rounded-primary"
            ref={setReferenceElement}
          >
            {trigger}
            {hasIcon && (
              <Icon icon={open ? "solid-angle-up-small" : "solid-angle-down-small"} className="w-6 h-6 ml-2" />
            )}
          </PopoverUI.Button>
          <PopoverUI.Overlay className="fixed inset-0 bg-black/60" />
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
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              className={`z-10 mt-3 w-max px-4 text-white py-9 bg-gray-700 rounded-3xl lg:px-8 ${contentClassName}`}
            >
              <div
                data-popper-arrow
                style={styles.arrow}
                {...attributes.arrow}
                className="z-20 -top-10 border-[28px] border-b-gray-700 border-r-transparent border-l-transparent border-t-transparent"
              />
              <div className="flex items-center gap-7">
                <button className="flex items-center justify-center bg-gray-800 h-11 w-11 rounded-xl" onClick={close}>
                  <Icon icon="solid-times" className="w-6 h-6" />
                </button>
                <span className="text-lg font-semibold">{header}</span>
                <button className="flex items-center justify-center h-11 w-11">
                  <Icon icon="solid-more-vertical" className="w-6 h-6" />
                </button>
              </div>
              <div className="my-5 h-[2px] bg-gray-800 lg:-mx-8 -mx-4"></div>
              <div className="">{content}</div>
            </PopoverUI.Panel>
          </Transition>
        </>
      )}
    </PopoverUI>
  );
};
