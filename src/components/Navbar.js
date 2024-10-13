import { matchPath, useLocation } from "react-router-dom";

import Navigation from "./Navbar/Navigation";
import React from "react";

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
      {match && <div>Search kısmındasın</div>}
    </nav>
  );
}

export default Navbar;
