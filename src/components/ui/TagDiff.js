import React from 'react'

/*
* String
* @Type = [succes, waiting, error]
*/

const Tag = ({ type, ...child }) => {

  return (
    <div className={`bg-${type}-light px-4 py-2 rounded-4xl`}>
      <p className={`text-${type} font-raleway font-medium`}>{child}</p>
    </div>
  )
}

export default Tag