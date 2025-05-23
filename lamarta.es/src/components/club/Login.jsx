import {React, useState, useEffect} from 'react'
import "../../styles/club/Login.css";
import Campo from './Campo';
import HeaderSeccion from '../general/HeaderSeccion'
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'

const urlLogin = "http://localhost/producto_fideplus_lamarta/route.php/login";
const urlToken = "http://localhost/producto_fideplus_lamarta/route.php/token";


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

async function singIn(usuario, contrasenia) {
    try {
        const json = await ajax({
            url: urlLogin,
            method: "POST",
            data: [{
              usuario: usuario.value,
              contrasenia: contrasenia.value
            }]
        });
        if (json.token) {
            sessionStorage.setItem('token', json.token);
            sessionStorage.setItem('tipo', json.tipo);
            sessionStorage.setItem('id_usuario', json.id);

            if (json.tipo === 'admin') {
                window.location.href = '/club/admin';
            } else {
                window.location.href = '/club/afiliado';
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    } catch (error) {
        console.error(error);
    }
}

async function comprobarValidez(id_usuario, token) {
    try {
        const json = await ajax({
            url: urlToken,
            method: "POST",
            data: [{ 
              token: token, 
              id_usuario: id_usuario 
            }]
        });
        return json == 1 || false;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function hacerLogin(ev) {
  ev.preventDefault();
  singIn(correo, password);
}


function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const tipo = sessionStorage.getItem('tipo');
    const id_usuario = sessionStorage.getItem('id_usuario');

    if (token && tipo) {
      comprobarValidez(id_usuario, token).then((esValido) => {
        if (esValido) {
          if (tipo === 'admin') {
            window.location.href = '/club/admin';
          } else {
            window.location.href = '/club/afiliado';
          }
        }
      });
    }
  }, []);

  return (
    <>
      <ScrollArriba />
      <HeaderSeccion nombre="LAMARTA CLUB" />
      <section className='login d-flex-col'>
          <form className='login--form d-flex-col' onSubmit={hacerLogin}>

              <Campo 
                id="correo" 
                nombre="Correo electrónico" 
                type={"email"} 
                placeholder={"tucorreo@ejemplo.com"} 
                onChange={(ev) => setCorreo(ev.target.value)}
              />
              <Campo 
                id="password" 
                nombre="Contraseña" 
                type={"password"} 
                placeholder={"Introduce tu contraseña"} 
                onChange={(ev) => setPassword(ev.target.value)}
              />

              <BotonSubmit mensaje={"Iniciar Sesión"} />
          </form>
      </section>
    </>
  )
}

export default Login
