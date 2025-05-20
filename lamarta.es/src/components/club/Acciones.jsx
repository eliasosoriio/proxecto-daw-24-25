import React from 'react'
import "../../styles/club/Acciones.css";
import { Link } from "react-router-dom";

function Acciones() {
  return (
    <section className='acciones d-flex-col'>
      <Link to="/" className='acciones--link' >
        <p className="acciones--opcion">Buscar afiliado</p>
      </Link>
      <Link to="/" className='acciones--link' >
        <p className="acciones--opcion">Añadir puntos</p>
      </Link>
      <Link to="/" className='acciones--link' >
        <p className="acciones--opcion">Canjear recompensa</p>
      </Link>
      <Link to="/" className='acciones--link' >
        <p className="acciones--opcion">Añadir recompensa</p>
      </Link>
      <Link to="/" className='acciones--link' >
        <p className="acciones--opcion">Editar recompensa</p>
      </Link>
      <Link to="/" className='acciones--link' >
        <p className="acciones--opcion">Eliminar recompensa</p>
      </Link>
    </section>
  )
}

export default Acciones
