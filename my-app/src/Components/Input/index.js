//have an input HTML element
// a submit button

import React from 'react'


export default function Input({ handleChange, handleClick }) {
  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Search</button>
    </div>
  )
}



