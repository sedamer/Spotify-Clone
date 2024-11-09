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
  const item2 = [
    {
      id: 1,
      title: "Flowers",
      subtitle: "Miley Cyrus",
      img: "https://i.scdn.co/image/ab67616d00001e02cd222052a2594be29a6616b5",
      type: "album",
    },
    {
      id: 2,
      title: "Beyonce",
      subtitle: "COWBOY CARTER",
      img: "https://i.scdn.co/image/ab67616d00001e021572698fff8a1db257a53599",
      type: "album",
    },
    {
      id: 3,
      title: "daylist",
      subtitle: "",
      img: "https://daylist.spotifycdn.com/playlist-covers-mix/en/afternoon_default.jpg",
      type: "album",
    },
    {
      id: 4,
      title: "Raye",
      subtitle: "Oscar Winning Tears.",
      img: "https://i.scdn.co/image/ab67616d00001e02b9ec4535536ee245b03598df",
      type: "album",
    },
    {
      id: 5,
      title: "Taylor Swift",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab67616100005174e672b5f553298dcdccb0e676",
      type: "artist",
    },
  ];
  const item3 = [
    {
      id: 1,
      title: "Confident Boots",
      subtitle: "I can buy my own flowers",
      img: "https://i.scdn.co/image/ab67706f00000002932f90f49b48a29f9599f4c6",
      type: "album",
    },
    {
      id: 2,
      title: "ABBA",
      img: "https://i.scdn.co/image/ab67616d00001e02f7ecaf9daf2c1d5ca89f7312",
      type: "album",
      subtitle: "ABBA Gold",
    },
    {
      id: 3,
      title: "emma chamberlain",
      img: "https://i.scdn.co/image/ab67656300005f1f86dc02872be623a4a7a23a58",
      type: "album",
      subtitle: "anything goes with emma chamberlain",
    },
    {
      id: 4,
      title: "Mor ve Ötesi",
      img: "https://i.scdn.co/image/ab67616d00001e0261cd6f5ad7c69b76adbc5419",
      type: "album",
      subtitle: "Re",
    },
    {
      id: 5,
      title: "Taylor Swift",
      img: "https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647",
      type: "album",
      subtitle: "Lover",
    },
  ];
  return (
    <div className="grid gap-y-8 py-10">
      <Section title="Recently played" more="/blabla" items={items} />
      <Section title="Shows to try" more="/blabla" items={item2} />
      <Section title="Made For Seda Mercan" more="/blabla" items={item3} />
    </div>
  );
}
export default Home;
