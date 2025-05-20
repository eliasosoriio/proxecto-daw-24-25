import React from 'react'
import "../../styles/club/BotonSubmit.css";

function BotonSubmit({mensaje}) {
  return (
    <button className='button--submit' type="submit">{mensaje}</button>
  )
}

export default BotonSubmit
