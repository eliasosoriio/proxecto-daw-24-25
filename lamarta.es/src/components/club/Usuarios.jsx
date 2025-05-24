import React, { useState, useEffect } from 'react'
import "../../styles/club/Usuarios.css";
import CampoPanel from './CampoPanel';

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

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function getUsuarios() {
      try {
        const json = await ajax({url:urlUsuarios});
        setUsuarios(json);
      } catch (error) {
        console.error(error);
      }
    }

    getUsuarios();
  }, [])

  return (
    <section className='usuarios d-flex-col'>
        <div>
            <h2 className='usuarios--titulo'>Usuarios</h2>
            <p className='usuarios--desc'>LOS 5 CON MÁS PUNTOS</p>
        </div>
        
        <section className="usuarios--campo d-flex-col">
            {[...usuarios].map((u, i)  => (
                <CampoPanel 
                key={i}
                nombre={'Nº ' + u.id_usuario + ' - ' + u.nombre}
                descripcion={u.apellidos}
                puntos={u.puntos}
                puedePerfil={true}
                id={u.id_usuario}
                />
            ))}
        </section>
    </section>
  )
}

export default Usuarios
