import "../../styles/general/Menu.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [estadoMenu, setEstadoMenu] = useState(false);

  const cambiarMenu = () => {
    setEstadoMenu((estadoMenu) => !estadoMenu);
  };
 
  return (
    <nav className="desplegable d-flex-col">
      <input
        id="menu"
        type="checkbox"
        className="d-none"
        checked={estadoMenu}
        onChange={cambiarMenu}
      />
      <label htmlFor="menu" className="desplegable--boton d-flex-row">
        {estadoMenu ? (
            <span className="fa-solid fa-x d-flex-row"></span>
        ) : (
            <span className="fa-solid fa-bars d-flex-row"></span>
        )}
      </label>
      <ul className="desplegable--opciones d-none">
        <li>
          <Link className="desplegable--opciones--link" onClick={cambiarMenu} to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="desplegable--opciones--link" onClick={cambiarMenu} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="desplegable--opciones--link" onClick={cambiarMenu} to="/conocenos">
            Conócenos
          </Link>
        </li>
        <li>
          <Link className="desplegable--opciones--link" onClick={cambiarMenu} to="/carta">
            Carta
          </Link>
        </li>
        <li>
          <Link  className="desplegable--opciones--link" onClick={cambiarMenu} to="/contacto">
            Contacto
          </Link>
        </li>
        <li>
          <Link  className="desplegable--opciones--link" onClick={cambiarMenu} to="/club">
            Lamarta Club
          </Link>
        </li>
        <li>
          <a
            className="desplegable--opciones--link"
            onClick={cambiarMenu}
            href="https://r.qamarero.com/lamarta?mode=PICKUP"
            aria-label="Realizar un pedido para recoger"
          >
            Pide para recoger
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
