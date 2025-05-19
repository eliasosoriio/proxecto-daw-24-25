import React from 'react'
import "../../styles/club/Recompensas.css";
import PanelCampo from './CampoPanel';

function Recompensas() {
  return (
    <section className='recompensas d-flex-col'>
        <div>
            <h2 className='recompensas--titulo'>Recompensas</h2>
            <p className='recompensas--desc'>ACUMULA PUNTOS</p>
        </div>
            
        <PanelCampo nombre={"Nombre"} descripcion={"Descripción"} precio={"3500"} />
        <PanelCampo nombre={"Nombre"} descripcion={"Descripción"} precio={"3500"} />
        <PanelCampo nombre={"Nombre"} descripcion={"Descripción"} precio={"3500"} />
        <PanelCampo nombre={"Nombre"} descripcion={"Descripción"} precio={"3500"} />
    </section>
  )
}

export default Recompensas
