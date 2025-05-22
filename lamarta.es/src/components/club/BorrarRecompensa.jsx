import {React, useState, useEffect} from 'react'
import "../../styles/club/BorrarRecompensa.css";
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'
import CampoPanel from './CampoPanel';

function realizarAccion(ev, accion) {
  ev.preventDefault();
  if(accion == "")
  console.log(accion);
  window.location.href = `/usuario/${accion}`;
}

function BorrarRecompensa() {
  return (
    <section className='borrar--recompensa d-flex-col'>
    <ScrollArriba />
      <h1 className="borrar--recompensa--titulo">¿Estás seguro de que quieres borrar esta recompensa?</h1>
      <form className='borrar--recompensa--form d-flex-col'>
        <CampoPanel nombre={"Recompensa"} descripcion={"Descripción"} puntos={"3475"} />
        <BotonSubmit mensaje={"Eliminar"} button={true} onClick={(ev) => realizarAccion(ev, "eliminar")} />
        <BotonSubmit mensaje={"Cancelar"} button={true} onClick={(ev) => realizarAccion(ev, "cancelar")} />
      </form>
    </section>
  )
}

export default BorrarRecompensa
