import { matchPath, useLocation } from "react-router-dom";

import Navigation from "./Navbar/Navigation";
import React from "react";
import Search from "../views/Search";

function Navbar() {
  const location = useLocation();
  const match = matchPath(
    {
      path: "/search",
      caseSensitive: false,
      end: true,
    },
    location.pathname // URL yolunu belirtir
  );

  return (
    <nav className="h-16 w-full flex items-center relative z-30">
      <Navigation />
      {match && <Search />}
    </nav>
  );
}

export default Navbar;
