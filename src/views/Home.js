import React from "react";
import Section from "../components/Section";

// album, podcast ve artist olarak 3 farklı tip olacak.
function Home() {
  const items = [
    {
      id: 1,
      title: "Moon Music",
      subtitle: "Coldplay",
      img: "https://i.scdn.co/image/ab67616d00001e0209ba52a5116e0c3e8461f58b",
      type: "album",
    },
    {
      id: 2,
      title: "Charlie xcx",
      subtitle:
        "Brat and it's the same but there's three more songs so it's not",
      img: "https://i.scdn.co/image/ab67616d00001e0255a1e72ba425c60a02a9bb47",
      type: "album",
    },
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
    {
      id: 4,
      title: "Yellow",
      subtitle: "Coldplay",
      img: "https://i.scdn.co/image/ab67616d00001e029164bafe9aaa168d93f4816a",
      type: "album",
    },
    {
      id: 5,
      title: "Yan Yana",
      subtitle: "Dolu Kadehi Ters Tut",
      img: "	https://i.scdn.co/image/ab67616d00001e02b8dafd648c375479282649a7",
      type: "album",
    },
  ];
  return (
    <div className="grid gap-y-8 py-10">
      <Section title="Recently played" more="/blabla" items={items} />

      <Section title="Shows to try" more="/blabla" items={items} />
      <Section title="Made For Seda Mercan" more="/blabla" items={items} />
    </div>
  );
}
export default Home;
