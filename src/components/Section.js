import { NavLink } from "react-router-dom";
import React from "react";
import SongItem from "./songItem";

function Section({ title, more = false, items = [] }) {
  return (
    <div>
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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-pink">
        {items.map((item) => (
          <SongItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Section;
