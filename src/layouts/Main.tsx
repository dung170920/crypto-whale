import { Header, Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
