import Icon from "../Icons";
import Menu from "./SideBar/Menu";
import Playlist from "./SideBar/Playlist";
import React from "react";
import logo from "../assets/logo.svg";

function SideBar() {
  return (
    <div className="p-6 ">
      <img src={logo} alt="logo" className="h-10 w-80" />
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 text-link  flex items-center hover:text-white"
            >
              <span className="flex items-center text-link  gap-x-4 px-2">
                <Icon name="plus" />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 text-link flex items-center hover:text-white"
            >
              <span className="flex items-center text-link  gap-x-4 px-2">
                <Icon name="heart" />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>

        <nav
          href="#"
          className=" mt-6 py-2 text-link flex items-center hover:text-white"
        >
          <span className="flex items-center text-link bg-transparent px-2 gap-x-4 ">
            <Icon name="lastPlay" />
          </span>
          Son Çalınanlar
        </nav>
      </nav>

      <Playlist />
    </div>
  );
}

export default SideBar;
