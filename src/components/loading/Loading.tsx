import { LogoIcon } from "@/assets";

export const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <LogoIcon className="h-32 w-32 mb-8" />
      <span className="text-xl">Loading ... </span>
    </div>
  );
};
