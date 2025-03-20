import React from "react";
import logo from "./assets/logo.svg";

export const Header = () => (
  <header className="text-center">
    <nav className="px-20 pt-12 pb-0 ">
      <img src={logo} alt="logo" className="mx-auto" />
    </nav>
  </header>
);
