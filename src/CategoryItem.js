import React from "react";

function CategoryItem({ category }) {
  return (
    <div
      style={{ background: category.color }}
      className="rounded-md before:pt-[100%] before:block relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <h3 className="text-2xl font-semibold tracking-tighter p-4">
          {category.title}
        </h3>
        <img
          src={category.cover}
          alt=""
          className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}

export default CategoryItem;
