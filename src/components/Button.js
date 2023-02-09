import React from 'react'

function Button({text, color}) {
  return (
    <button className='btn' style={{'background-color':color}}>{text}</button>
  )
}

export default Button