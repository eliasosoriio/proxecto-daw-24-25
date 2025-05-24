import React, { useState, useEffect } from 'react'
import "../../styles/club/Recompensas.css";
import CampoPanel from './CampoPanel';

const urlRecompensas = "http://localhost/producto_fideplus_lamarta/route.php/recompensa";

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

function Recompensas() {

  const [recompensas, setRecompensas] = useState([]);
  
    useEffect(() => {
      async function getRecompensas() {
        try {
          const json = await ajax({url:urlRecompensas});
          setRecompensas(json);
        } catch (error) {
          console.error(error);
        }
      }
  
      getRecompensas();
    }, [])

  return (
    <section className='recompensas d-flex-col'>
        <div>
            <h2 className='recompensas--titulo'>Recompensas</h2>
            <p className='recompensas--desc'>CANJEA TU FAVORITA</p>
        </div>

        <section className="recompensas--campo d-flex-col">
            {[...recompensas].map((r, i)  => (
                <CampoPanel 
                  key={i}
                  nombre={r.nombre}
                  descripcion={r.descripcion}
                  puntos={r.precio}
                  puedeBorrar={true} 
                  puedeEditar={true}
                  id={r.id_recompensa}
                />
            ))}
        </section>
    </section>
  )
}

export default Recompensas
