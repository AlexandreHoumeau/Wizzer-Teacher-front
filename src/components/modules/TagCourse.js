import React, { useState } from 'react'
import { useEffect } from 'react'

const TagCourse = ({ title }) => {
  const [type, setType] = useState()
  const [processedTitle, setProcessTitle] = useState()
  useEffect(() => {
    setType(
      title === 'easy' ? 'success' : title === 'medium' ? 'waiting' : 'red'
    )
    setProcessTitle(title === 'easy' ? 'Facile' : title === 'medium' ? 'Moyen' : 'Difficile')
  },  [title])

  return (
    <div className={`bg-${type}-light px-4 py-2 rounded-4xl`}>
      <p className={`text-${type} font-raleway font-medium`}>{processedTitle}</p>
    </div>
  )
}

export default TagCourse
