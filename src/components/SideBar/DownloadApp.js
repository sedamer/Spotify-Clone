import Icon from "../../Icons";
import React from "react";

function DownloadApp() {
  return (
    <div className=" mt-3 py-2 h-10 flex items-center  ">
      <span className="flex items-center flex-shrink-0 text-link px-2 hover:text-white">
        <Icon name="download" size={20} />
      </span>
      Uygulamayı yükle
    </div>
  );
}

export default DownloadApp;
