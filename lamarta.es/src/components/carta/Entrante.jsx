import React from 'react'
import '../../styles/carta/Entrante.css'

function Entrante({nombre, precio}) {
  return (
    <div className='entrante d-flex-row'>
        <p className='entrante--nombre'>{nombre}</p>
        <p className='entrante--precio'>{precio}</p>
    </div>
  )
}

export default Entrante
