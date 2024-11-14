import React from "react";
import SongItem from "./songItem";
import Title from "../Title";

function Section({ title, more = false, items = [] }) {
  return (
    <div>
      <Title title={title} more={more} />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-pink">
        {items.map((item) => (
          <SongItem
            key={item.id}
            item={item}
            className={"bg-tertiary p-4 rounded group hover:bg-secondary"}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
