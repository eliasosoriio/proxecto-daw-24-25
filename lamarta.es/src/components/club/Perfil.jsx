import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "../../styles/club/Perfil.css";
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'
import CampoPanel from './CampoPanel';

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

function realizarAccion(ev, accion, id) {
  ev.preventDefault();
  window.location.href = `/usuario/${accion}/${id}`;
}

function Perfil() {
  const [usuario, setUsuario] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getUsuario(id, token) {
      try {
        const json = await ajax({
          url:urlUsuarios.concat("/").concat(parseInt(id)),
          headers: {
            "x-api-key": token
          }
        });
        setUsuario(json);
      } catch (error) {
        console.error(error);
      }
    }

    getUsuario(id, sessionStorage.getItem('token'));
  }, [])

  return (
    <section className='perfil d-flex-col'>
    <ScrollArriba />
      <form className='perfil--form d-flex-col'>
        <CampoPanel nombre={'Nº ' + usuario.id_usuario + ' - ' + usuario.nombre + ' ' + usuario.apellidos} descripcion={usuario.correo} puntos={usuario.puntos} />
        <BotonSubmit mensaje={"Añadir Puntos"} button={true} onClick={(ev) => realizarAccion(ev, "anadir", id)} />
        <BotonSubmit mensaje={"Canjear Recompensa"} button={true} onClick={(ev) => realizarAccion(ev, "canjear", id)} />
      </form>
    </section>
  )
}

export default Perfil
