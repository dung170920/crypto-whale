import { Bug } from "@/assets";
import { FallbackProps } from "react-error-boundary";

export const Error = ({ error }: FallbackProps) => {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-center">
      <div className="lg:w-[650px] w-min p-14 bg-white rounded-xl">
        <Bug className="h-[300px] w-[300px] mx-auto" />
        <h2 className="mb-4 text-3xl font-bold text-red">System Error</h2>
        <p className="text-black">{error.message}</p>
      </div>
    </div>
  );
};
