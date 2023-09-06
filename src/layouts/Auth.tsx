import { Header } from "@/components";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
