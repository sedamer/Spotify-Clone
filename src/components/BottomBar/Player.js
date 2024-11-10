import Icon from "../../Icons";
import { Range } from "react-range";
import React from "react";
import secondsToTime from "./utils";
import { useAudio } from "react-use";

function Player() {
  // const [values, setValues] = React.useState([50]);
  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  });
  return (
    <div className="flex justify-between items-center h-full">
      <div className="min-w-[11.25rem] w-[30%]">sol</div>
      <div className=" max-w-[45.125rem] w-[40%] flex flex-col items-center ">
        <div className="flex items-center gap-x-5">
          <button className="flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name={"ShuffleIcon"} />
          </button>
          <button className="flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name={"PlayerPrevIcon"} />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="flex items-center justify-center text-black bg-white rounded-full w-9 h-9 hover:scale-[1.06]"
          >
            <Icon size={22} name={state?.playing ? "pause" : "play"} />
          </button>
          <button className="flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name={"PlayerNextIcon"} />
          </button>{" "}
          <button className="flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name={"repeat"} />
          </button>{" "}
        </div>
        <div className="w-full p-0 mt-5 relative">
          <div className="text-[0.688rem] text-white text-opacity-70 w-8 -ml-10 absolute -top-2">
            {secondsToTime(state?.time)}
          </div>
          {audio}

          <Range
            label="Select your value"
            step={0.1}
            min={0}
            max={state?.duration || 1}
            values={[state?.time || 0]}
            onChange={(value) => controls.seek(value)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-1 w-full rounded-md self-center"
                style={{
                  ...props.style,
                  background: `linear-gradient(to right, #1db954 ${
                    ((state?.time || 0) / (state?.duration || 1)) * 100
                  }%, #cccccc ${
                    ((state?.time || 0) / (state?.duration || 1)) * 100
                  }%)`,
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="h-3 w-3 rounded-full bg-white "
                key={props.key}
                style={{
                  ...props.style,
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="text-[0.688rem] text-white text-opacity-70 mt-14 ml-4 ">
        {secondsToTime(state?.duration)}
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end">sağ</div>
    </div>
  );
}

export default Player;
