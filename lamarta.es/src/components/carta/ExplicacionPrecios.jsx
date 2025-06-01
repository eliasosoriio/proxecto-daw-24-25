import React from 'react'
import '../../styles/carta/ExplicacionPrecios.css'

function ExplicacionPrecios() {
  return (
    <>
        <figure className='corona d-flex-row'>
            <img src="https://lamarta.es/assets/corona.svg" alt="corona de lamarta" className='corona--imagen' />
        </figure>
        <ul className='explicacion--precios d-flex-row'>
            <li>BURGER</li>
            <li>MENÚ</li>
        </ul>
    </>
  )
}

export default ExplicacionPrecios
