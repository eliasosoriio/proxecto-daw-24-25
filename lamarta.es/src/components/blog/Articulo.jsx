import '../../styles/blog/Articulo.css'
import React from 'react'

function Articulo({imagen, titulo, descripcion}) {
  return (
    <article className='blog--articulo d-flex-row'>
        <figure className="blog--articulo--img">
          <img src={imagen} alt="Imagen del artículo" />
        </figure>
        <div className='blog--articulo--contenido d-flex-col'>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
    </article>
  )
}

export default Articulo
