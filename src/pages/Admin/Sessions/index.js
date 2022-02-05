import React from "react";
import { useDrag, useDrop } from "react-dnd";

const Session = () => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: "BOX",
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "BOX",
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div>
      <div>
        <div className="font-bold text-2xl">Durée</div>
      </div>

      <div>
        <div className="grid grid-cols-3">
          <div className="col-span-1 min-w-min" ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <div className="p-3 bg-gray-300 rounded" role="Handle" ref={drag}>
              Element to drag and drop
            </div>
          </div>

          <div
            ref={drop}
            role={"Dustbin"}
            style={{ backgroundColor: isOver ? "red" : "white" }}
          >
            {canDrop ? "Release to drop" : "Drag a box here"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
