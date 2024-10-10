import Icon from "../../Icons";
import React from "react";

// import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="px-2 pt-4">
      <ul className="flex flex-col">
        <li>
          <a
            href="#"
            className="flex h-10 items-center text-sm text-link text-white hover:text-white  bg-secondary rounded gap-x-4"
          >
            <span>
              <Icon name="home" />
            </span>
            Ana Sayfa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex h-10 items-center  text-link hover:text-white gap-x-4"
          >
            <span>
              <Icon name="search" />
            </span>
            Ara
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex h-10 items-center  text-link hover:text-white gap-x-4"
          >
            <span>
              <Icon name="collection" />
            </span>
            Kitaplığım
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
