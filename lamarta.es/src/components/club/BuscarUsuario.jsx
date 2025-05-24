import {React, useState, useEffect} from 'react'
import "../../styles/club/BuscarUsuario.css";
import Campo from './Campo';
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'

const urlUsuarios = "http://localhost/producto_fideplus_lamarta/route.php/afiliado";

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

function BuscarUsuario() {
  const [id, setId] = useState();

  const getUsuario = async (ev) => {
    ev.preventDefault();

    try {
      const json = await ajax({ 
        url: urlUsuarios.concat("/").concat(parseInt(id)),
        headers: {
          "x-api-key": sessionStorage.getItem('token')
        }
      });

      if (json.id_usuario) {
        window.location.href = `/usuario/perfil/${id}`;
      } else {
        alert("Usuario no encontrado.");
      }
    } catch (error) {
      console.error(error);
      alert("Error al buscar el usuario.");
    }
  }


  return (
    <section className='buscar--usuario d-flex-col'>
    <ScrollArriba />
        <form className='buscar--usuario--form d-flex-col' onSubmit={getUsuario} >
            <Campo 
              id="usuario" 
              nombre="Nº de Afiliado" 
              type={"number"} 
              placeholder={"465"} 
              min={0}
              onChange={(ev) => {
                setId(ev.target.value);
              }}
            />
            <BotonSubmit mensaje={"Buscar Usuario"} />
        </form>
    </section>
  )
}

export default BuscarUsuario
