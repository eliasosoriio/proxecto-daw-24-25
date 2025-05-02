import "../../styles/general/Footer.css"
import React from 'react'

function Footer() {
  return (
    <footer className='pie d-flex-col'>
        <img src="https://lamarta.es/assets/logo-lamarta-1.svg" alt="Logo de Lamarta" />
        <a href="tel:664368661">664 36 86 61</a>
        <a 
            href="https://maps.app.goo.gl/5bmD4zxCKLPidTUC6"
            target="_blank"
            rel="noreferrer"
        >
            RÚA ARCEBISPO XELMÍREZ, 7 - 36600 VILAGARCÍA DE AROUSA
        </a>
        <section className="pie--politicas d-flex-col">
            <p>Aviso Legal</p>   
            <p>Política de Privacidad</p>   
            <p>Política de Cookies</p>   
            <p>Declaración de Accesibilidad</p>   
        </section>
        <p className="pie--copy">&copy; Lamarta. Todos los derechos reservados.</p>
    </footer>
  )
}
 
export default Footer
