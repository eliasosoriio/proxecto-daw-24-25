import {React, useState, useEffect} from 'react'
import "../../styles/club/Perfil.css";
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'
import CampoPanel from './CampoPanel';

function realizarAccion(ev, accion) {
  ev.preventDefault();
  console.log(accion);
  window.location.href = `/usuario/${accion}`;
}

function Perfil() {
  return (
    <section className='perfil d-flex-col'>
    <ScrollArriba />
      <form className='perfil--form d-flex-col'>
        <CampoPanel nombre={"Nombre"} descripcion={"Apellidos"} puntos={"3475"} />
        <BotonSubmit mensaje={"Añadir Puntos"} button={true} onClick={(ev) => realizarAccion(ev, "anadir")} />
        <BotonSubmit mensaje={"Canjear Recompensa"} button={true} onClick={(ev) => realizarAccion(ev, "canjear")} />
      </form>
    </section>
  )
}

export default Perfil
