import React from "react";
import SongItem from "../components/songItem";
import Title from "../Title";

function Profile() {
  const user = {
    name: "Seda Mercan",
    avatar: "https://placekitten.com/250/250",
  };
  const mostListenedArtist = [
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
      src: "https://freesound.org/data/previews/612/612087_1648170-lq.mp3",
    },
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
  ];
  const follows = [
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
    {
      id: 3,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
    },
  ];
  const mostListenedSongs = [
    {
      id: "1",
      songName: "",
      artist: "",
      img: "",
      songlong: "",
      icon: "",
    },
  ];
  return (
    <div className="gap-3">
      <div className="h-[%100] w-[%100] min-h-[320px] bg-gradient-to-b from-indigo-300 ...">
        <div className="flex items-center pt-16 p-5 gap-x-5 ">
          <img src={user.avatar} alt="" className="w-40 h-40 rounded-full" />
          <span className="flex-shrink-0 text-5xl font-medium	 ">
            {user.name}
          </span>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-gray-500 font-medium flex items-center justify-center">
            Herkese Açık 4 Çalma Listesi .
          </p>
          <Title
            title="8 Takipçi .Takip edilenler:10"
            className="text-sm flex items-center justify-center gap-x-2"
          />
        </div>
      </div>
      <div className="pt-5 space-y-4">
        <div className="flex items-center justify-start gap-x-5">
          <Title title="Bu ayın en çok dinlenen sanatçıları" />

          <button className="text-link text-xs  hover:underline font-medium">
            see all
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mostListenedArtist.map((item) => (
            <SongItem key={item.id} item={item} className={"bg-transparent"} />
          ))}
        </div>
      </div>
      <div className="pt-5 space-y-4">
        <div className="flex items-center justify-start gap-x-5">
          <Title title="Bu ayın en çok dinlenen sanatçıları" />

          <button className="text-link text-xs  hover:underline font-medium">
            see all
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {mostListenedArtist.map((item) => (
            <SongItem key={item.id} item={item} className={"bg-transparent"} />
          ))}
        </div>
      </div>
      <div className="pt-5 space-y-4">
        <div className="flex items-center justify-start gap-x-5">
          <Title title="Bu ayın en çok dinlenen sanatçıları" />
          <button className="text-link text-xs  hover:underline font-medium">
            see all
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {follows.map((item) => (
            <SongItem key={item.id} item={item} className={"bg-transparent"} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
