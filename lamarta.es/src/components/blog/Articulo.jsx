import '../../styles/blog/Articulo.css'
import React from 'react'

function Articulo({imagen, titulo, descripcion}) {
  return (
    <article className='blog--articulo'>
        <img src={imagen} alt="Imagen del artículo" />
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
    </article>
  )
}

export default Articulo
