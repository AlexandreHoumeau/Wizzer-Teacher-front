import React from 'react'

/*
* String
* @Type = [succes, waiting, error]
*/

const Tag = ({ type }) => {

  return (
    <div className={`bg-${type}-light px-4 py-2 rounded-4xl`}>
      <p className={`text-${type} font-raleway font-medium`}>{type === 'success' ? 'Facile' : type === 'waiting' ? 'Normal' : 'Difficile'}</p>
    </div>
  )
}

export default Tag