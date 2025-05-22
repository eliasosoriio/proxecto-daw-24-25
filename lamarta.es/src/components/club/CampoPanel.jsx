import React from 'react'
import "../../styles/club/CampoPanel.css";
import { Link } from "react-router-dom";

function CampoPanel({nombre, descripcion, puntos, puedeEditar=false, puedeBorrar=false}) {
  const tipo = sessionStorage.getItem('tipo');
  
  return (
    <article className='campo--panel d-flex-row'>
      <div className='d-flex-col'>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>{puntos} puntos.</p>
      </div>
      <div className='campo--panel--iconos d-flex-row'>
        {tipo === "admin" && (
          <>
            {puedeEditar && (
              <Link to="/recompensa/editar" className='icon-link'>
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            )}
            {puedeBorrar && (
              <Link to="/recompensa/borrar" className='icon-link'>
                <i className="fa-solid fa-trash"></i>
              </Link>
            )}
          </>
        )}
      </div>
    </article>
  )
}

export default CampoPanel
