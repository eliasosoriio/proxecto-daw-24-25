import React from 'react'
import "../../styles/club/Panel.css";
import Saludo from './Saludo'
import Recompensas from './Recompensas'
import Usuarios from './Usuarios'
import Puntos from './Puntos';
import ScrollArriba from '../general/ScrollArriba'

function PanelAfiliado() {
  return (
    <section className="paneles d-flex-col">
      <ScrollArriba />
      <section className="panel d-flex-col">
        <Saludo nombre={"Manuel Osorio"}/> 
      </section>

      <section className="panel d-flex-col">
        <Usuarios /> 
      </section>
      <section className="panel d-flex-col">
        <Recompensas /> 
      </section>

      <section className="panel d-flex-col">
        <Puntos numero={"0001"} puntos={"3469"} /> 
      </section>
    </section>
  )
}

export default PanelAfiliado
