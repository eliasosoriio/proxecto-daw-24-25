import React from 'react'
import "../../styles/club/Usuarios.css";
import CampoPanel from './CampoPanel';

function Recompensas() {
  return (
    <section className='usuarios d-flex-col'>
        <div>
            <h2 className='usuarios--titulo'>Usuarios</h2>
            <p className='usuarios--desc'>ACUMULA PUNTOS</p>
        </div>
            
        <CampoPanel nombre={"Nombre"} descripcion={"Apellidos"} puntos={"4000"} />
        <CampoPanel nombre={"Nombre"} descripcion={"Apellidos"} puntos={"2345"} />
        <CampoPanel nombre={"Nombre"} descripcion={"Apellidos"} puntos={"7000"} />
        <CampoPanel nombre={"Nombre"} descripcion={"Apellidos"} puntos={"3500"} />
    </section>
  )
}

export default Recompensas
