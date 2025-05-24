import React from 'react'
import "../../styles/club/Panel.css";
import Saludo from './Saludo'
import Recompensas from './Recompensas'
import Transacciones from './Transacciones'
import Puntos from './Puntos';
import ScrollArriba from '../general/ScrollArriba'

function PanelAfiliado() {
  return (
    <section className="paneles d-flex-col">
      <ScrollArriba />
      <section className="panel d-flex-col">
        <Saludo /> 
      </section>

      <section className="panel d-flex-col">
        <Recompensas /> 
      </section>

      <section className="panel d-flex-col">
        <Transacciones /> 
      </section>

      <section className="panel d-flex-col">
        <Puntos /> 
      </section>
    </section>
  )
}

export default PanelAfiliado
