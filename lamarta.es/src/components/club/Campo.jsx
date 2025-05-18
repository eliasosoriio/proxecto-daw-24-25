import React from 'react'
import "../../styles/club/Campo.css";

function Campo({id, nombre, type, placeholder}) {
  return (
    <>
        <label className='campo--label' htmlFor={id}>{nombre}:</label>
        <input className='campo--input' type={type} placeholder={placeholder} id={id}></input>
    </>
  )
}

export default Campo
