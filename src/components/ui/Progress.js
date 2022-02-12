import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Progress = ({ total, current }) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    setPercent(( current / total) * 100)
  }, [current, total])
  return (
    <div className="font-raleway text-primary grid items-center grid-cols-6">
      <div className="w-full h-1 bg-grey rounded-lg relative col-span-4">
        <div
          style={{ width: `${percent}%` }}
          className="h-1 absolute rounded-lg bg-primary"
        />
      </div>
    <div className="flex text-center col-span-2 ml-2 text-xl">
      {current} / {total}
    </div>
    </div>
  );
};

export default Progress;
