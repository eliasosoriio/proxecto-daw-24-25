import React from 'react'
import '../../styles/carta/ExplicacionPrecios.css'

function ExplicacionPrecios() {
  return (
    <>
        <div className='corona d-flex-row'>
            <img src="https://lamarta.es/assets/corona.svg" alt="corona de lamarta" className='corona--imagen' />
        </div>
        <div className='explicacion--precios d-flex-row'>
            <p>BURGER</p>
            <p>MENÚ</p>
        </div>
    </>
  )
}

export default ExplicacionPrecios
