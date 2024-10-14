// import DownloadApp from "../SideBar/DownloadApp";

import React from "react";

function Playlist() {
  return (
    <nav className="mx-6 mt-4 pt-2 flex-auto h-96 overflow-auto border-t border-white border-opacity-20">
      <ul>
        {new Array(9).fill(0).map((_, index) => (
          <li>
            <a
              href="/"
              className="text-link hover:text-white flex h-8 py-2 items-center"
            >
              yıldızların peşinde
            </a>
          </li>
        ))}
      </ul>
      {/* <DownloadApp /> */}
    </nav>
  );
}

export default Playlist;
