import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TagCourse = ({ title, type }) => {
  const [processedTitle, setProcessTitle] = useState()
  const [processedType, setProcessType] = useState()

  useEffect(() => {
    if (type) {
      setProcessTitle(type === 'success' ? 'Facile' : type === 'waiting' ? 'Moyen' : 'Difficile')
    }
  }, [type])

  useEffect(() => {
    if (title) {
      switch (title) {
        case 'hard':
          setProcessType('error')
          setProcessTitle('Difficile')
          break
          case 'medium':
            setProcessType('waiting')
            setProcessTitle('Moyen')
            break
          case 'easy':
            setProcessType('success')
            setProcessTitle('Facile')
            break
        default:
          setProcessTitle('')
          setProcessType('')
          break;
      }
      setProcessTitle(type === 'success' ? 'Facile' : type === 'waiting' ? 'Moyen' : 'Difficile')
    }
  }, [title])

  return (
    <div className={`bg-${type || processedType}-light px-4 py-2 rounded-4xl`}>
      <p className={`text-${type || processedType} font-raleway font-semibold`}>{processedTitle}</p>
    </div>
  );
};

export default TagCourse;
