import React from "react";
import { useDrag } from "react-dnd";

const Dragitem = ({ exercice }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    item: {
      ...exercice
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      role="Handle"
      ref={drag}
      key={exercice._id}
      className="rounded cursor-pointer py-4 px-8 bg-white"
    >
      <div className="text-lg font-bold flex">
        {exercice._module.title.toUpperCase()}:{" "}
        <div id={exercice._id} className="font-light ml-2">
          {exercice.title}
        </div>
      </div>
    </div>
  );
};

export default Dragitem;
