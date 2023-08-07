import { FC } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <AppBar />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
