import React from 'react'
import '../../styles/carta/Hamburguesa.css'

function Hamburguesa({nombre, carne, ingredientes, precio, precioMenu}) {
  return (
    <section className='smash d-flex-row'>
        <div className="smash--contenido d-flex-col">
            <p className="smash--contenido--nombre">{nombre}</p>
            <p className="smash--contenido--carne">{carne}</p>
            <p className="smash--contenido--ingredientes">{ingredientes}</p>
        </div>
        <div className="smash--precios d-flex-row">
            <p>{precio}</p>
            <p>{precioMenu}</p>
        </div>
    </section>
  )
}

export default Hamburguesa
