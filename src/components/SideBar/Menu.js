import Icon from "../../Icons";
import React from "react";

function Menu() {
  const isActive = (path) => window.location.pathname === path;

  return (
    <nav className="px-2 pt-4">
      <ul className="flex flex-col">
        <li>
          <a
            href="/"
            className={`flex h-10 items-center text-sm text-link text-white hover:text-white rounded gap-x-4 ${
              isActive("/") ? "bg-zinc-800" : "backdrop"
            }`}
          >
            <span>
              <Icon name="home" />
            </span>
            Home
          </a>
        </li>
        <li>
          <a
            href="/search"
            className={`flex h-10 items-center text-link text-white hover:text-white rounded gap-x-4 ${
              isActive("/search") ? "bg-zinc-800" : "backdrop"
            }`}
          >
            <span>
              <Icon name="search" />
            </span>
            Search
          </a>
        </li>
        <li>
          <a
            href="/collection"
            className={`flex h-10 items-center text-link text-white hover:text-white rounded gap-x-4 ${
              isActive("/collection") ? "bg-zinc-800" : "backdrop"
            }`}
          >
            <span>
              <Icon name="collection" />
            </span>
            My Library
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
