import React from 'react'
import "../../styles/club/Recompensas.css";
import CampoPanel from './CampoPanel';

function Recompensas() {
  return (
    <section className='recompensas d-flex-col'>
        <div>
            <h2 className='recompensas--titulo'>Recompensas</h2>
            <p className='recompensas--desc'>CANJEA TU FAVORITA</p>
        </div>
            
        <CampoPanel nombre={"Nombre"} descripcion={"Descripción"} puntos={"3500"} puedeBorrar={true} puedeEditar={true} />
        <CampoPanel nombre={"Nombre"} descripcion={"Descripción"} puntos={"3500"} puedeBorrar={true} puedeEditar={true} />
        <CampoPanel nombre={"Nombre"} descripcion={"Descripción"} puntos={"3500"} puedeBorrar={true} puedeEditar={true} />
        <CampoPanel nombre={"Nombre"} descripcion={"Descripción"} puntos={"3500"} puedeBorrar={true} puedeEditar={true} />
    </section>
  )
}

export default Recompensas
