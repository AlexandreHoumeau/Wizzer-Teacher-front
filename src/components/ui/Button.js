import React from 'react'

const Button = ({ text, type, action }) => {
  return (
    <button type="submit" onClick={action} className={`bg-${type} py-4 px-8 rounded-4xl`}>
      <p className="text-lg font-raleway font-bold text-waiting-light">{text}</p>
    </button>
  )
}

export default Button
