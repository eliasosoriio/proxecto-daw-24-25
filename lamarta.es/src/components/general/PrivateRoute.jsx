import {React, useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';

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

async function comprobarValidez(id_usuario, token) {
    try {
        const json = await ajax({
            url: urlToken,
            method: "POST",
            data: [{ 
              token: token,
              id_usuario : id_usuario
            }]
        });
        return json == 1 || false;
    } catch (error) {
        console.error(error);
        return false;
    }
}

function PrivateRoute({ children, rolPermitido }) {
    const token = sessionStorage.getItem('token');
    const tipo = sessionStorage.getItem('tipo');
    const id_usuario = sessionStorage.getItem('id_usuario');

    const [valido, setValido] = useState(null);

    useEffect(() => {
        async function validar() {
            if (!token) {
                setValido(false);
                return;
            }
            const esValido = await comprobarValidez(id_usuario, token);
            setValido(esValido);
        }

        validar();
    }, [token]);

    if (valido === null) {
        return <h1 className="cargando d-flex-col">Cargando...</h1>;
    }

    if (!token || !valido) {
        return <Navigate to="/club/login" replace />;
    }

    if (rolPermitido && tipo !== rolPermitido) {
        if(tipo=== "admin") {
            return <Navigate to="/club/admin" replace />;
        } else {
            return <Navigate to="/club/afiliado" replace />;
        }
    }

    return children;
}

export default PrivateRoute;
