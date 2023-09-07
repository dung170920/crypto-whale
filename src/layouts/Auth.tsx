import { Header } from "@/components";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <>
      <Header />
      <main className="container lg:px-[218px] h-screen w-screen">
        <Outlet />
      </main>
    </>
  );
};
