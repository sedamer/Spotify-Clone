import Icon from "../Icons";
import React from "react";
import SongItem from "../components/songItem";
import Title from "../Title";

function Collection() {
  const items = [
    {
      id: 1,
      title: "yıldızların peşinde",
      subtitle: "Seda",
      img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72cac974fe80b3464da91a54c00",
      type: "album",
    },
    {
      id: 2,
      title: "ortaya karısık",
      subtitle: "Seda",
      img: "https://mosaic.scdn.co/300/ab67616d00001e020e58a0f8308c1ad403d105e7ab67616d00001e021572698fff8a1db257a53599ab67616d00001e02264c32750a4676ac49183fbbab67616d00001e0289992f4d7d4ab94937bf9e23",
      type: "album",
    },
    {
      id: 3,
      title: "killing me softly",
      subtitle: "Seda",
      img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c207fdebe9c59fe72634f81fe",
      type: "album",
    },
    {
      id: 4,
      title: "redd en sevdiklerim",
      subtitle: "Seda",
      img: "https://mosaic.scdn.co/300/ab67616d00001e022c6546d19d9baa5f5fbd022bab67616d00001e02a945f95adbd9dc9f3e00b850ab67616d00001e02c53fb79c2bf2c7c6c513c0d7ab67616d00001e02d70aaa8d075b0c6c0e850219",
      type: "album",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center border-b border-gray-">
        <Title title="Collection" />
        <button>
          <Icon name={"plus"} size={20} icon="plus" />{" "}
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-pink">
        {items.map((item) => (
          <SongItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
