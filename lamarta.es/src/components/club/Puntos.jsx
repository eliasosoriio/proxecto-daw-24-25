import React from 'react'
import "../../styles/club/Puntos.css";

function Puntos({puntos, numero}) {
  return (
    <section className='puntos d-flex-col'>
        <img src="http://lamarta.es/assets/favicon-lamarta.png" alt="Corona Lamarta en los puntos." />
        <p>Eres el afiliado</p>
        <p> Nº: {numero}</p>
        <img src="https://lamarta.es/assets/logo-lamarta-2.svg" alt="Logo Lamarta" />
        <p>Tienes</p>
        <p>{puntos} puntos!</p>
    </section>
  )
}

export default Puntos
