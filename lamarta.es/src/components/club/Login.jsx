import {React, useState} from 'react'
import "../../styles/club/Login.css";
import Campo from './Campo';
import HeaderSeccion from '../general/HeaderSeccion'

const urlLogin = "http://localhost/producto_fideplus_lamarta/route.php/login";

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

async function singIn($usuario, $contrasenia) {
    try {
        const json = await ajax({
            url: urlLogin,
            method: "POST",
            data: [{
              usuario: $usuario.value,
              contrasenia: $contrasenia.value
            }]
        });
        console.log(json);
        if (json.token) {
            console.log(json.token);
            sessionStorage.setItem('token', json.token);
            sessionStorage.setItem('tipo', json.tipo);
            console.log(sessionStorage.getItem('token'));

            if (json.tipo === 'admin') {
                window.location.href = '/club/panel/admin';
                console.log(sessionStorage.getItem('token'));
            } else {
                window.location.href = '/club/panel/afiliado';
            }
        } else {
            console.log('Usuario o contraseña incorrectos');
        }
    } catch (error) {
        console.error(error);
    }
}

async function login(ev) {
  ev.preventDefault();
  singIn(correo, password);
}


function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <HeaderSeccion nombre="LAMARTA CLUB" />
      <section className='login d-flex-col'>
          <form className='login--form d-flex-col' onSubmit={login}>

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

              <button id='loginBtn' className='login--button' type="submit">Iniciar Sesión</button>
          </form>
      </section>
    </>
  )
}

export default Login
