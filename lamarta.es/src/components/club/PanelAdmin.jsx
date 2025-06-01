import React from 'react'
import "../../styles/club/Panel.css";
import Saludo from './Saludo'
import Recompensas from './Recompensas'
import Usuarios from './Usuarios'
import Acciones from './Acciones';
import ScrollArriba from '../general/ScrollArriba'

function PanelAdmin() {
  return (
    <>
      <h1 className='paneles--titulo'>LAMARTA CLUB</h1>
      <section className="paneles d-flex-col">
        <ScrollArriba />
        
        <Saludo />

        <Usuarios /> 
          
        <Recompensas /> 

        <Acciones /> 
      </section>
    </>
  )
}

export default PanelAdmin
