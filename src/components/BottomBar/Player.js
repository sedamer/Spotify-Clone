import Icon from "../../Icons";
import { Range } from "react-range";
import React from "react";

function Player() {
  const [values, setValues] = React.useState([50]);

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
          </button>{" "}
          <button className="flex items-center justify-center text-black bg-white rounded-full w-9 h-9 hover:scale-[1.06]">
            <Icon name={"play"} />
          </button>{" "}
          <button className="flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name={"PlayerNextIcon"} />
          </button>{" "}
          <button className="flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <Icon name={"repeat"} />
          </button>{" "}
        </div>
        <div className="w-full py-2 mt-3">
          <Range
            label="Select your value"
            step={0.1}
            min={0}
            max={100}
            values={values}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                className="h-1 w-full rounded-md self-center"
                style={{
                  ...props.style,
                  background: `linear-gradient(to right, #1db954 ${values[0]}%, #cccccc ${values[0]}%)`,
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
      <div className="min-w-[11.25rem] w-[30%] flex justify-end">sağ</div>
    </div>
  );
}

export default Player;
