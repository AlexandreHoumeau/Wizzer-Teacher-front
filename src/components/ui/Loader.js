import React from 'react'
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full h-full backdrop-filter flex justify-center items-center backdrop-blur-sm absolute z-50">
        {/* <div className=" w-full h-full flex justify-center" /> */}
        <div className="">
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/temporary_files/Fpip5r.json"
            className=" w-1/2 z-50"
          >
          </Player>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Loader
