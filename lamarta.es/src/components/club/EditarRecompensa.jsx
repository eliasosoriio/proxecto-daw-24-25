import {React, useState, useEffect} from 'react'
import { data, useParams } from 'react-router-dom';
import "../../styles/club/EditarRecompensa.css";
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

async function editarRecompensa(id, nombre, descripcion, precio) {
    try {
        const json = await ajax({
            url: `${urlRecompensa}/${id}`,
            method: "PATCH",
            data: [{
              id_recompensa: id,
              nombre: nombre,
              descripcion: descripcion,
              precio: precio
            }]
        });

        if (!json.error) {
          window.location.href = `/club/admin`;
        } else {
          alert("Recompensa no editada.");
        }
    } catch (error) {
        console.error(error);
    }
}


function realizarAccion(ev, accion, id, nombre, descripcion, precio) {
  ev.preventDefault();
  if(accion == "editar") {
    editarRecompensa(id, nombre, descripcion, precio);
  } else {
    window.location.href = `/club/admin`;
  }
}

function EditarRecompensa() {
  const [recompensa, setRecompensa] = useState({});
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState(0);
  const { id } = useParams();

  useEffect(() => {
      async function getRecompensa(id) {
        try {
          const json = await ajax({url:urlRecompensa.concat("/").concat(parseInt(id))});
          setRecompensa(json);
          setNombre(json.nombre);
          setDescripcion(json.descripcion);
          setPrecio(json.precio);
        } catch (error) {
          console.error(error);
        }
      }
  
      getRecompensa(id);
    }, [])

  return (
    <section className='editar--recompensa d-flex-col'>
    <ScrollArriba />
        <form className='editar--recompensa--form d-flex-col'>
            <Campo 
              nombre="Nombre de la recompensa" 
              type={"text"} 
              placeholder={"Hamburguesa con patatas."} 
              onChange={(ev) => {
                setNombre(ev.target.value);
              }}
              defaultValue={recompensa.nombre}
            />
            <Campo 
              nombre="Descripción de la recompensa" 
              type={"text"} 
              placeholder={"No incluye bebida."} 
              onChange={(ev) => {
                setDescripcion(ev.target.value);
              }}
              defaultValue={recompensa.descripcion}
            />
            <Campo 
              nombre="Precio en puntos de la recompensa" 
              type={"number"} 
              placeholder={"1200"} 
              min={0}
              onChange={(ev) => {
                setPrecio(ev.target.value);
              }}
              defaultValue={recompensa.precio}
            />
            <BotonSubmit mensaje={"Editar Recompensa"}  button={true} onClick={(ev) => realizarAccion(ev, "editar", id, nombre, descripcion, precio)} />
            <BotonSubmit mensaje={"Cancelar"}  button={true} onClick={(ev) => realizarAccion(ev, "cancelar", id, nombre, descripcion, precio)} />
        </form>
    </section>
  )
}

export default EditarRecompensa
