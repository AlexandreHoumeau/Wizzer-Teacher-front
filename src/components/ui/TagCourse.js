import React from "react";

const TagCourse = ({ title, type }) => {
  return (
    <div className={`bg-${type}-light px-4 py-2 rounded-4xl`}>
      <p className={`text-${type} font-raleway font-medium`}>{title}</p>
    </div>
  );
};

export default TagCourse;
