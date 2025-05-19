import React from 'react'
import "../../styles/club/CampoPanel.css";

function CampoPanel({nombre, descripcion, precio}) {
  return (
    <article className='campo--panel d-flex-col'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>{precio} puntos.</p>
    </article>
  )
}

export default CampoPanel
