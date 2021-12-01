import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function ThemedSuspense() {
  return (
    <div className="w-full h-full backdrop-filter flex justify-center items-center backdrop-blur-sm absolute z-50">
      <div className="">
        <Player
          autoplay
          loop
          src="https://assets1.lottiefiles.com/temporary_files/Fpip5r.json"
          className=" w-1/2 z-50"
        ></Player>
      </div>
    </div>
  );
}

export default ThemedSuspense;
