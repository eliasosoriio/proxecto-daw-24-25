import {React, useState, useEffect} from 'react'
import "../../styles/club/AnadirRecompensa.css";
import Campo from './Campo';
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'

const urlRecompensa = "http://localhost/producto_fideplus_lamarta/route.php/recompensa";

async function ajax(options) {
    const {url, method, data} = options;

    try {
        const resp = await fetch(url, {
            method: method || "GET",
            headers: {
                "Content-type":"application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        });

        if (!resp.ok) throw new Error(`HTTP error! Status: ${resp.status}`);

        const json = await resp.json();

        return json;

    } catch (error) {
        return {
            error: true,
            status: error.status,
            statusText: error.statusText || "Algo ha ocurrido"
        };
    }
}

function AnadirRecompensa() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);

  const anadirRecompensa = async (ev) => {
    ev.preventDefault();

    try {
      const json = await ajax({ 
        url: urlRecompensa,
        method: 'POST',
        data: [{
          nombre: nombre,
          descripcion: descripcion,
          precio: precio
        }]
      });

      if (!json.error) {
        window.location.href = `/club/admin`;
      } else {
        alert("Recompensa no insertada.");
      }
    } catch (error) {
      console.error(error);
      alert("Error al insertar la recompensa.");
    }
  }

  return (
    <section className='anadir--recompensa d-flex-col'>
    <ScrollArriba />
        <form className='anadir--recompensa--form d-flex-col' onSubmit={anadirRecompensa}>
            <Campo 
              nombre="Nombre de la recompensa" 
              type={"text"} 
              placeholder={"Hamburguesa con patatas."} 
              onChange={(ev) => {
                setNombre(ev.target.value);
              }}
            />
            <Campo 
              nombre="Descripción de la recompensa" 
              type={"text"} 
              placeholder={"No incluye bebida."} 
              onChange={(ev) => {
                setDescripcion(ev.target.value);
              }}
            />
            <Campo 
              nombre="Precio en puntos de la recompensa" 
              type={"number"} 
              placeholder={"1200"} 
              min={0}
              onChange={(ev) => {
                setPrecio(ev.target.value);
              }}
            />
            <BotonSubmit mensaje={"Añadir Recompensa"} />
        </form>
    </section>
  )
}

export default AnadirRecompensa
