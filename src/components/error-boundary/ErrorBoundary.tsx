import { FallbackProps } from "react-error-boundary";

export const Error = ({ error }: FallbackProps) => {
  return (
    <div className="lg:w-[650px] p-14 bg-white rounded-xl mx-auto">
      <p>Something went wrong:</p>
      <pre className="text-red">{error.message}</pre>
    </div>
  );
};
