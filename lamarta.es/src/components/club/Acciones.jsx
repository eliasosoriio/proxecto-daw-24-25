import React from 'react'
import "../../styles/club/Acciones.css";
import { Link } from "react-router-dom";

function Acciones() {
  return (
    <section className='acciones d-flex-col'>
      <Link to="/" className='acciones--link' >
        <a href="" className="acciones--opcion">Buscar afiliado</a>
      </Link>
      <Link to="/" className='acciones--link' >
        <a href="" className="acciones--opcion">Canjear recompensa</a>
      </Link>
      <Link to="/" className='acciones--link' >
        <a href="" className="acciones--opcion">Añadir recompensa</a>
      </Link>
      <Link to="/" className='acciones--link' >
        <a href="" className="acciones--opcion">Editar recompensa</a>
      </Link>
      <Link to="/" className='acciones--link' >
        <a href="" className="acciones--opcion">Eliminar recompensa</a>
      </Link>
    </section>
  )
}

export default Acciones
