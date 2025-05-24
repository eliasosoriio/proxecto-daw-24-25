import React from 'react'
import "../../styles/club/Panel.css";
import Saludo from './Saludo'
import Recompensas from './Recompensas'
import Usuarios from './Usuarios'
import Acciones from './Acciones';
import ScrollArriba from '../general/ScrollArriba'

function PanelAdmin() {
  return (
    <section className="paneles d-flex-col">
      <ScrollArriba />
      <section className="panel d-flex-col">
        <Saludo /> 
      </section>

      <section className="panel d-flex-col">
        <Usuarios /> 
      </section>
      <section className="panel d-flex-col">
        <Recompensas /> 
      </section>

      <section className="panel d-flex-col">
        <Acciones /> 
      </section>
    </section>
  )
}

export default PanelAdmin
