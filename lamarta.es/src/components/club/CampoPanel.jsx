import React from 'react'
import "../../styles/club/CampoPanel.css";

function CampoPanel({nombre, descripcion, puntos, puedeEditar=false, puedeBorrar=false}) {
  return (
    <article className='campo--panel d-flex-row'>
      <div className='d-flex-col'>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{puntos} puntos.</p>
      </div>
      <div className='campo--panel--iconos d-flex-row'>
        {puedeEditar && <i class="fa-solid fa-pen-to-square"></i>}
        {puedeBorrar && <i class="fa-solid fa-trash"></i>}
      </div>
    </article>
  )
}

export default CampoPanel
