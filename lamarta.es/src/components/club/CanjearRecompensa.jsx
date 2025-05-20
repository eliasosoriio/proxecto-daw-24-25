import {React, useState, useEffect} from 'react'
import "../../styles/club/CanjearRecompensa.css";
import Campo from './Campo';
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'

function CanjearRecompensa() {
  return (
    <section className='canjear--recompensa d-flex-col'>
    <ScrollArriba />
        <form className='canjear--recompensa--form d-flex-col'>
            <Campo 
              nombre="Selecciona la recompensa a canjear:" 
              type={"text"} 
              placeholder={"2 Burgers LAMARTA"} 
              min={0}
            />
            <BotonSubmit mensaje={"Canjear Recompensa"} />
        </form>
    </section>
  )
}

export default CanjearRecompensa
