import {React, useState, useEffect} from 'react'
import "../../styles/club/AnadirPuntos.css";
import Campo from './Campo';
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'

function AnadirPuntos() {
  return (
    <section className='anadir--puntos d-flex-col'>
    <ScrollArriba />
        <form className='anadir--puntos--form d-flex-col'>
            <Campo 
              nombre="Introduce el importe del ticket:" 
              type={"number"} 
              placeholder={"18,97"} 
              min={0}
            />
            <BotonSubmit mensaje={"Añadir Puntos"} />
        </form>
    </section>
  )
}

export default AnadirPuntos
