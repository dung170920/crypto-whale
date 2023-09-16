import { Header, Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 h-full">
        <Header />
        <div className="h-full overflow-y-auto">
          <div className="h-[5000px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
