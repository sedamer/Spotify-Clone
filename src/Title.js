import { NavLink } from "react-router-dom";
import React from "react";

function Title({ title, more = false }) {
  return (
    <header className="flex justify-between items-center mb-4">
      <NavLink to={more}>
        <h3 className="text-2xl font-semibold tracking-tighter hover:underline">
          {title}
        </h3>
      </NavLink>
      {more && (
        <NavLink
          to={more}
          cl
          assName="text-link text-xs uppercase hover:underline"
        >
          See All
        </NavLink>
      )}
    </header>
  );
}

export default Title;
