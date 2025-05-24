import React, { useState, useEffect } from 'react'
import "../../styles/club/Puntos.css";

const urlUsuarios = "http://localhost/producto_fideplus_lamarta/route.php/afiliado";

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

function Puntos({puntos, numero}) {
  const [usuario, setUsuario] = useState({});
    
    useEffect(() => {
      async function getUsuario(id) {
        try {
          const json = await ajax({url:urlUsuarios.concat("/").concat(parseInt(id))});
          setUsuario(json);
        } catch (error) {
          console.error(error);
        }
      }
  
      getUsuario(sessionStorage.getItem('id_usuario'));
    }, [])

  return (
    <section className='puntos d-flex-col'>
        <img src="http://lamarta.es/assets/favicon-lamarta.png" alt="Corona Lamarta en los puntos." />
        <p>Eres el afiliado</p>
        <p className='puntos--orange'> Nº {usuario.id_usuario}</p>
        <img src="https://lamarta.es/assets/logo-lamarta-2.svg" alt="Logo Lamarta" />
        <p>Tienes</p>
        <p className='puntos--orange'>{usuario.puntos}</p>
        <p>puntos!</p>
    </section>
  )
}

export default Puntos
