import Icon from "../../Icons";
import React from "react";

function DownloadApp() {
  return (
    <div className="flex items-center  ">
      <span className="flex items-center flex-shrink-0 text-link px-2 hover:text-white">
        <Icon name="download" size={20} />
      </span>
      Install the app{" "}
    </div>
  );
}

export default DownloadApp;
