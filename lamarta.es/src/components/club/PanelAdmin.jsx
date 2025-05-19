import React from 'react'
import "../../styles/club/Panel.css";
import Saludo from './Saludo'
import Recompensas from './Recompensas'

function PanelAdmin() {
  return (
    <section className="paneles d-flex-col">
      <section className="panel d-flex-col">
        <Saludo nombre={"Manuel Osorio"}/> 
      </section>

      <section className="panel d-flex-col">
        <Recompensas /> 
      </section>
      <section className="panel d-flex-col">
        <Recompensas /> 
      </section>

      <section className="panel d-flex-col">
        <Saludo nombre={"Manuel Osorio"}/> 
      </section>
    </section>
  )
}

export default PanelAdmin
