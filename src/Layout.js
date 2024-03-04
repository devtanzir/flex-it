import React from "react";
import Navbar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default Layout;
