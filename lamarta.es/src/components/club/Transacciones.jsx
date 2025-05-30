import React, { useState, useEffect } from 'react'
import "../../styles/club/Transacciones.css";
import CampoPanel from './CampoPanel';

const urlTransacciones = "https://lamarta.es/api/route.php/transaccion";

async function ajax(options) {
    const {url, method, data, headers} = options;

    try {
        const resp = await fetch(url, {
            method: method || "GET",
            headers: {
                "Content-type":"application/json; charset=utf-8",
                ...headers
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

function Transacciones() {

  const [transacciones, setTransacciones] = useState([]);
  
    useEffect(() => {
      async function getTransacciones(token) {
        try {
          const json = await ajax({
            url:urlTransacciones.concat('/').concat(sessionStorage.getItem('id_usuario')),
            headers: {
              "x-api-key": token
            }
          });
          setTransacciones(json);
        } catch (error) {
          console.error(error);
        }
      }
  
      getTransacciones(sessionStorage.getItem('token'));
    }, [])

  return (
    <section className='transacciones d-flex-col'>
        <div>
            <h2 className='transacciones--titulo'>Transacciones</h2>
            <p className='transacciones--desc'>TUS ÚLTIMAS 5</p>
        </div>

        <section className="transacciones--campo d-flex-col">
            {[...transacciones].map((t, i)  => (
                <CampoPanel 
                  key={i}
                  nombre={t.concepto}
                  descripcion={t.fecha}
                  puntos={t.importe}
                />
            ))}
        </section>
    </section>
  )
}

export default Transacciones
