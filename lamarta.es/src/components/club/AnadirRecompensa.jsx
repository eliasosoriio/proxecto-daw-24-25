import {React, useState, useEffect} from 'react'
import "../../styles/club/AnadirRecompensa.css";
import Campo from './Campo';
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'

function AnadirRecompensas() {
  return (
    <section className='anadir--recompensa d-flex-col'>
    <ScrollArriba />
        <form className='anadir--recompensa--form d-flex-col'>
            <Campo 
              nombre="Nombre de la recompensa:" 
              type={"text"} 
              placeholder={"Hamburguesa con patatas."} 
            />
            <Campo 
              nombre="Descripción de la recompensa:" 
              type={"text"} 
              placeholder={"No incluye bebida."} 
            />
            <Campo 
              nombre="Precio en puntos de la recompensa:" 
              type={"number"} 
              placeholder={"1200"} 
              min={0}
            />
            <BotonSubmit mensaje={"Añadir Recompensa"} />
        </form>
    </section>
  )
}

export default AnadirRecompensas
