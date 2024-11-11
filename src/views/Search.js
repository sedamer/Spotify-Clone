import CategoryItem from "../CategoryItem";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Title from "../Title";
import WideCategory from "../WideCategory";
import categories from "../data/categories";
import wideCategories from "../data/mostListened";

function Search() {
  return (
    <>
      <section className="mb-4">
        <Title title="En çok dinlediğin türler" />
        <ScrollContainer className="flex overflow-x gap-x-6 scrollable">
          {wideCategories.map((category, index) => (
            <WideCategory key={index} category={category} />
          ))}
        </ScrollContainer>
      </section>
      <section>
        <Title title="Hepsine göz at" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 flex-shrink-0">
          {categories.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Search;
