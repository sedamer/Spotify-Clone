import Icon from "../Icons";
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
      id: 1,
      title: "JADE",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab6761610000517402216a4b6ede096c60ac03e5",
      type: "artist",
      src: "https://freesound.org/data/previews/612/612087_1648170-lq.mp3",
    },
    {
      id: 2,
      title: "Charlie XCX",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab67616100005174936885667ef44c306483c838",
      type: "artist",
    },
    {
      id: 3,
      title: "Coldplay",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab676161000051741ba8fc5f5c73e7e9313cc6eb",
      type: "artist",
    },
    {
      id: 4,
      title: "Billie Eilish",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab676161000051744a21b4760d2ecb7b0dcdc8da",
      type: "artist",
    },
    {
      id: 5,
      title: "Lady Gaga",
      subtitle: "Artist",
      img: "https://i.scdn.co/image/ab676161000051744b09cd0839c6129c29d22f79",
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
      songName: "Disease",
      artist: "Lady Gaga",
      img: "https://i.scdn.co/image/ab67616d00004851465e58cfc2ee480a7d0ae59d",
      songlong: "3.41",
      icon: <Icon name="heart" />,
    },
    {
      id: "2",
      songName: "Diet Pepsi",
      artist: "Addison Rae",
      img: "https://i.scdn.co/image/ab67616d000048514e5a5862355a5e953549292b",
      songlong: "3.41",
      icon: <Icon name="heart" />,
    },
    {
      id: "3",
      songName: "Yavaş Yavaş Yavaş",
      artist: "Redd",
      img: "https://i.scdn.co/image/ab67616d000048512c6546d19d9baa5f5fbd022b",
      songlong: "3.41",
      icon: <Icon name="heart" />,
    },
    {
      id: "4",
      songName: "Dancing Queen",
      artist: "ABBA",
      img: "https://i.scdn.co/image/ab67616d0000485170f7a1b35d5165c85b95a0e0",
      songlong: "3.41",
      icon: <Icon name="heart" />,
    },
    {
      id: "5",
      songName: "Wildflower",
      artist: "Billie Eilish",
      img: "https://i.scdn.co/image/ab67616d0000485171d62ea7ea8a5be92d3c1f62",
      songlong: "3.41",
      icon: <Icon name="heart" />,
    },
  ];
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
    <div className="gap-3">
      <div className="h-[%100] w-[%100] min-h-[320px] bg-gradient-to-b from-red-200 ...">
        <div className="flex items-center pt-16 p-5 gap-x-5 ">
          <img src={user.avatar} alt="" className="w-40 h-40 rounded-full" />
          <span className="flex-shrink-0 text-5xl font-medium	 ">
            {user.name}
          </span>
        </div>
        <div className="flex  justify-start items-center gap-x-5 p-2">
          <p className="text-link font-medium flex items-center justify-center">
            Herkese Açık 4 Çalma Listesi .
          </p>
          <p className="text-white font-medium flex items-center justify-center">
            8 Takipçi . Takip Edilen:10
          </p>
        </div>
      </div>
      <div className="pt-5 space-y-4">
        <div className="flex items-center justify-between gap-x-5">
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
        <div className="flex items-center justify-between gap-x-5">
          <Title title="Bu ayın en çok dinlenen parçaları" />

          <button className="text-link text-xs hover:underline font-medium">
            see all
          </button>
        </div>
        <div>
          <ol className="space-y-2" type="number">
            {mostListenedSongs.map((item, index) => (
              <li
                key={item.id}
                className="flex items-center gap-4 p-2 bg-transparent"
              >
                <span className="text-sm font-md">{index + 1}.</span>

                <img src={item.img} className="w-10 h-10 rounded" alt="" />

                <div className="flex-1">
                  <p className="font-semibold">{item.songName}</p>
                  <p className="text-sm text-link">{item.artist}</p>
                </div>

                <p className="text-sm text-gray-500">{item.songlong}</p>

                <span>{item.icon}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="pt-5 space-y-4">
        <div className="flex items-center justify-between gap-x-5">
          <Title title="Herkese Açık Çalma Listesi" />
          <button className="text-link text-xs  hover:underline font-medium">
            see all
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-pink p-3">
          {items.map((item) => (
            <SongItem
              key={item.id}
              item={item}
              className={"bg-tertiary p-4 rounded group hover:bg-secondary"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
