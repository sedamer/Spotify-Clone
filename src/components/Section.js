import Icon from "../Icons";
import { NavLink } from "react-router-dom";
import React from "react";

function Section({ title, more = false, items = [] }) {
  const types = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";
      default:
        return "rounded";
    }
  };
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
            className="text-link text-xs uppercase hover:underline"
          >
            See All
          </NavLink>
        )}
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-pink">
        {items.map((item) => (
          <NavLink
            key={item.id}
            className="bg-tertiary p-4 rounded group hover:bg-secondary"
          >
            <div className="pt-[100%] relative mb-4 ">
              <img
                src={item.img}
                alt={item.title}
                className={`w-full h-auto object-cover absolute inset-0 mb-2 ${types(
                  item
                )}`}
              />
              <button className="w-10 h-10 bg-primary rounded-full absolute group-hover:flex group-focus:flex bottom-2 right-2  items-center justify-center hidden">
                <Icon name="play"></Icon>
              </button>
            </div>
            <div className="text-sm font-medium">{item.title}</div>
            <div className="text-xs text-gray-400">{item.subtitle}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Section;
