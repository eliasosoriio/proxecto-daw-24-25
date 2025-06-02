import {React, useState, useEffect} from 'react'
import "../../styles/club/Login.css";
import Campo from './Campo';
import HeaderSeccion from '../general/HeaderSeccion'
import BotonSubmit from './BotonSubmit';
import ScrollArriba from '../general/ScrollArriba'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Link } from "react-router-dom";

const urlLogin = "https://lamarta.es/api/route.php/login";
const urlToken = "https://lamarta.es/api/route.php/token";


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
              usuario: usuario,
              contrasenia: contrasenia
            }]
        });

        const notyf = new Notyf({
            position: {
                x: 'right',
                y: 'top'
            }
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
            notyf.error('El usuario o la contraseña son incorrectos.');
        }
    } catch (error) {
        console.error(error);
    }
}

async function comprobarValidez(id_usuario, token, tipo) {
    try {
        const json = await ajax({
            url: urlToken,
            method: "POST",
            data: [{ 
              token: token, 
              id_usuario: id_usuario,
              tipo: tipo
            }]
        });
        return json == 1 || false;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function hacerLogin(ev, correo, password) {
  ev.preventDefault();
  const notyf = new Notyf({
      position: {
          x: 'right',
          y: 'top'
      }
  });
  const regexEmail = /^[^@]+@[^@]+\.[^@]+$/;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/;
  if(regexEmail.test(correo)) {
    if(password.length > 8 && regexPass.test(password)) {
      singIn(correo, password);
    } else {
      notyf.error('El campo contraseña debe tener al menos entre 8 y 16 caracteres, una mayúscula, una minúscula, un número y un carácter especial.');
    }
  } else {
    notyf.error('El email no tiene un formato válido.');
  }
}


function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const tipo = sessionStorage.getItem('tipo');
    const id_usuario = sessionStorage.getItem('id_usuario');

    if (token && tipo) {
      comprobarValidez(id_usuario, token, tipo).then((esValido) => {
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
          <form className='login--form d-flex-col' onSubmit={(ev) => hacerLogin(ev, correo, password)}>

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

              <Link className='register--acceso' to={'/club/registro/acceso'}>
                <p>No tengo cuenta, quiero registrarme</p>
              </Link>
          </form>
      </section>
    </>
  )
}

export default Login
