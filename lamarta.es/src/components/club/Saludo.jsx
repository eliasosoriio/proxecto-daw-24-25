import React from 'react'
import "../../styles/club/Saludo.css";

function Saludo({nombre}) {
  return (
    <section className='saludo d-flex-col'>
        <img src="http://lamarta.es/assets/favicon-lamarta.png" alt="Corona Lamarta en el saludo." />
        <p>¡Bienvenido/a</p>
        <p>{nombre}!</p>
        <img src="https://lamarta.es/assets/logo-lamarta-2.svg" alt="Logo Lamarta" />
    </section>
  )
}

export default Saludo
