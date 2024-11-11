import { matchPath, useLocation } from "react-router-dom";

import Navigation from "./Navbar/Navigation";
import Profile from "./Navbar/Profile";
import React from "react";
import Search from "./Navbar/Search";

// import Search from "../views/Search";

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
    <nav className="h-[3.75rem] flex items-center justify-between px-8 relative z-10">
      <Navigation />
      {match && <Search />}
      <Profile />
    </nav>
  );
}

export default Navbar;
