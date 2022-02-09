import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useDrop } from "react-dnd";
import { RecycleBinIcon } from "assets/icons";

const DropItem = ({ index, addCourse, courses, removeCourse }) => {
  const [hover, setHover] = useState(false);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "BOX",
    // Props to collect
    drop: (item, monitor) => addCourse(item, index),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      role={"Dustbin"}
      className={classNames(
        isOver && "bg-purple-100",
        index === 0 ? "" : "border-l",
        "text-center italic h-full"
      )}
    >
      {courses?.map((course, indexCourse) => (
        <div
          key={indexCourse}
          onMouseEnter={() => setHover(indexCourse)}
          onMouseLeave={() => setHover(null)}
          onClick={() => removeCourse(course, index)}
          className={classNames(
            hover === indexCourse ? "bg-purple-50" : "bg-purple-100",
            "transform cursor-pointer relative duration-200 text-purple-500 p-3 text-left font-thin not-italic rounded-lg m-2 font"
          )}
        >
          {hover === indexCourse && (
              <RecycleBinIcon className="absolute"/>
          )}
          <div className={classNames(hover === indexCourse && 'opacity-20')}>
            <div>{course.title}</div>
            <div className="flex items-center justify-between">
              <div className="font-bold">{course._module.title}</div>
              <div
                className={classNames(
                  course.difficulty === "hard"
                    ? "bg-red"
                    : course.difficulty === "medium"
                    ? "bg-blue-500"
                    : "bg-green-500",
                  "w-2 h-2 rounded-full"
                )}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="py-5 text-gray-400 p-3"/>
    </div>
  );
};

export default DropItem;
