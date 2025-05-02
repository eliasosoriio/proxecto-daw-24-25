import "../../styles/general/Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
   return (
        <header className="cabecera d-flex-row">
                <Link 
                    className="cabecera--logo d-flex-col" 
                    to="/" 
                    aria-label="Ir a la página de inicio"
                >
                    <img
                        src="https://lamarta.es/assets/logo-lamarta-2.svg"
                        alt="Logo de Lamarta The Best Burger Bar"
                    />
                    <p>The Best Burger Bar</p>
                </Link>

                <nav
                    className="cabecera--nav d-none" 
                    aria-label="Menú de navegación en ordenador"
                    role="navigation"
                >
                    <Link className="link" to="/">Inicio</Link>
                    <Link className="link" to="/blog">Blog</Link>
                    <Link className="link" to="/conocenos">Conócenos</Link>
                    <Link className="link" to="/carta">Carta</Link>
                    <Link className="link" to="/contacto">Contacto</Link>
                    <Link  className="link" to="/club">Lamarta Club</Link>
                    <a  className="link"
                        href="https://r.qamarero.com/lamarta?mode=PICKUP"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Realizar un pedido para recoger"
                    >
                        Pide para recoger
                    </a>
                </nav>

                <ul className="cabecera--contacto d-flex-row" role="list">
                    <li>
                        <a
                            href="https://maps.app.goo.gl/5bmD4zxCKLPidTUC6"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Ubicación en Google Maps"
                        >
                            <span className="fa-solid fa-location-dot" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li className="separador" aria-hidden="true"></li>
                    <li>
                        <a href="tel:664368661" aria-label="Llamar al 664 368 661">
                            <span className="fa-solid fa-phone" aria-hidden="true"></span>
                        </a>
                    </li>
                </ul>
        </header>
   );
}

export default Header;