import { Link, Outlet } from "react-router-dom";

export const Blank = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-center">
      <div className="lg:w-[650px] w-min p-14 bg-white rounded-xl flex flex-col items-center">
        <Outlet />

        <Link to="/" className="px-6 py-3 mt-10 text-white rounded-md bg-primary w-fit">
          Go Home
        </Link>
      </div>
    </div>
  );
};
