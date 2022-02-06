import classNames from "classnames";
import React from "react";
import { useDrop } from "react-dnd";

const DropItem = ({ index }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "BOX",
    // Props to collect
    drop: (item, monitor) => getItem(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const getItem = (item) => {
    console.log(item)
  }

  return (
    <div
      ref={drop}
      role={"Dustbin"}
      style={{ backgroundColor: isOver ? "red" : "" }}
      className={classNames(
        index === 0 ? "" : "border-l",
        "text-center p-3 italic text-grey-dark"
      )}
    >
      Ajouter
    </div>
  );
};

export default DropItem;
