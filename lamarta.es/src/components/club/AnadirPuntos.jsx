import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import "../../styles/club/AnadirPuntos.css";
import Campo from './Campo';
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'

const urlTransacciones = "http://localhost/producto_fideplus_lamarta/route.php/transaccion";

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

async function anadirPuntos(id, concepto, importe) {
    try {
        const json = await ajax({
            url: urlTransacciones,
            method: "POST",
            data: [{
              id_usuario_admin: sessionStorage.getItem('id_usuario'),
              id_usuario_afiliado: id,
              concepto: concepto,
              importe: importe
            }],
            headers: {
              "x-api-key": sessionStorage.getItem('token')
            }
        });

        if (!json.error) {
          window.location.href = `/usuario/perfil/${id}`;
        } else {
          alert("Transacción no realizada.");
        }
    } catch (error) {
        console.error(error);
    }
}

function realizarAccion(ev, accion, id, concepto, importe) {
  ev.preventDefault();
  if(accion == "cancelar") {
    window.location.href = `/usuario/perfil/${id}`;
  } else {
    anadirPuntos(id, concepto, Math.ceil(importe * 10));
  }
}

function AnadirPuntos() {
  const [concepto, setConcepto] = useState("");
  const [importe, setImporte] = useState(0);
  const { id } = useParams();

  return (
    <section className='anadir--puntos d-flex-col'>
    <ScrollArriba />
        <form className='anadir--puntos--form d-flex-col' onSubmit={(ev) => realizarAccion(ev, "anadir", id, concepto, importe)}>
            <Campo 
              nombre="Escribe un concepto" 
              type={"text"} 
              placeholder={"Pedido en el local"} 
              onChange={(ev) => {
                setConcepto(ev.target.value);
              }}
            />
            <Campo 
              nombre="Introduce el importe del ticket" 
              type={"number"} 
              placeholder={"18,97"} 
              min={0}
              step={true}
              onChange={(ev) => {
                setImporte(ev.target.value);
              }}
            />
            <BotonSubmit mensaje={"Añadir Puntos"} />
            <BotonSubmit mensaje={"Cancelar"}  button={true} onClick={(ev) => realizarAccion(ev, "cancelar", id, concepto, importe)} />
        </form>
    </section>
  )
}

export default AnadirPuntos
