import {React, useState, useEffect} from 'react'
import "../../styles/club/BuscarUsuario.css";
import Campo from './Campo';
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'

function comprobarUsuario(ev) {
  ev.preventDefault();
  window.location.href = `/usuario/perfil`;
}

function BuscarUsuario() {
  return (
    <section className='buscar--usuario d-flex-col'>
    <ScrollArriba />
        <form className='buscar--usuario--form d-flex-col' onSubmit={comprobarUsuario} >
            <Campo 
              id="usuario" 
              nombre="Nº de Afiliado" 
              type={"number"} 
              placeholder={"465"} 
              min={0}
            />
            <BotonSubmit mensaje={"Buscar Usuario"} />
        </form>
    </section>
  )
}

export default BuscarUsuario
