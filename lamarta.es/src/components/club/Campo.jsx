import React from 'react'
import "../../styles/club/Campo.css";

function Campo({id, nombre, type, placeholder, min}) {
  return (
    <>
        <label className='campo--label' htmlFor={id}>{nombre}:</label>
        <input className='campo--input' type={type} placeholder={placeholder} id={id} min={min}></input>
    </>
  )
}

export default Campo
