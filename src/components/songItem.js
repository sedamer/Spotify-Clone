import { useDispatch, useSelector } from "react-redux";

import Icon from "../Icons";
import { NavLink } from "react-router-dom";
import React from "react";
import { setCurrent } from "../components/stores/player";

function SongItem({ item }) {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);
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
  const isCurrentItem = current?.id === item.id && playing;
  const updateCurrent = () => {
    if (current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  return (
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
        <button
          onClick={updateCurrent}
          className={`w-10 h-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center ${
            !isCurrentItem ? "hidden" : "flex"
          }`}
        >
          <Icon name={isCurrentItem ? "pause" : "play"}></Icon>
        </button>
      </div>
      <div className="text-sm font-medium">{item.title}</div>
      <div className="text-xs text-gray-400">{item.subtitle}</div>
    </NavLink>
  );
}

export default SongItem;
