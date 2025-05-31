import React from 'react'
import "../../styles/club/CampoPanel.css";
import { Link } from "react-router-dom";

function CampoPanel({nombre, descripcion, puntos, puedeEditar=false, puedeBorrar=false, puedePerfil=false, id}) {
  const tipo = sessionStorage.getItem('tipo');
  const editarRecompensa = `/recompensa/editar/${id}`;
  const borrarRecompensa = `/recompensa/borrar/${id}`;
  const verPerfil = `/usuario/perfil/${id}`;
  
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
              <Link to={editarRecompensa} className='icon-link' aria-label={'Acción editar: '+ nombre}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            )}
            {puedeBorrar && (
              <Link to={borrarRecompensa} className='icon-link' aria-label={'Acción borrar: '+ nombre}>
                <i className="fa-solid fa-trash"></i>
              </Link>
            )}
            {puedePerfil && (
              <Link to={verPerfil} className='icon-link' aria-label={'Acción ver perfil: '+ nombre}>
                <i className="fa-solid fa-user"></i>
              </Link>
            )}
          </>
        )}
      </div>
    </article>
  )
}

export default CampoPanel
