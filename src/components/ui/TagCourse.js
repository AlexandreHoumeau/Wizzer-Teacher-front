import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TagCourse = ({ title, type }) => {
  const [processedTitle, setProcessTitle] = useState()

  useEffect(() => {
    setProcessTitle(type === 'success' ? 'Facile' : type === 'waiting' ? 'Moyen' : 'Difficile')
  }, [type])

  return (
    <div className={`bg-${type}-light px-4 py-2 rounded-4xl`}>
      <p className={`text-${type} font-raleway font-medium`}>{title || processedTitle}</p>
    </div>
  );
};

export default TagCourse;
