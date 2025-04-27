import '../styles/Servicio.css'
import React from 'react'

function Servicio({icono, nombre, descripcion}) {
  return (
    <section className="servicios--apartado d-flex-col">
        <div className='servicios--apartado--titulo d-flex-row'>
            <h2>{nombre}</h2>
            <span className={icono}></span>
        </div>
        <p>{descripcion}</p>
    </section>
  )
}

export default Servicio
