import Menu from "./SideBar/Menu";
import React from "react";
import logo from "../assets/logo.svg";

function SideBar() {
  return (
    <div className="w-64 p-6">
      <img src={logo} alt="logo" className="h-10" />
      <Menu />
    </div>
  );
}

export default SideBar;
