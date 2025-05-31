import "../../styles/inicio/Inicio.css";
import React from 'react'
import Servicio from "./Servicio";
import { Link } from "react-router-dom";
import ScrollArriba from "../general/ScrollArriba";

function Inicio() {
  return (
    <>
      <ScrollArriba />
      <header className="portada" aria-labelledby="portada-titulo">
        <div className="portada--contenido d-flex-col">
          <h1 id="portada-titulo">LAMARTA - THE BEST BURGUER BAR</h1>
          <p>HAZ TU PEDIDO</p>
          <p>YA POR LA <span>WEB</span></p>
          <a
            href="https://r.qamarero.com/lamarta?mode=PICKUP"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hacer pedido online"
          >
            PEDIR
          </a>
        </div>
      </header>

      <section className="productos" aria-labelledby="productos-titulo">
        <h2 id="productos-titulo">NO IMPORTA QUE MOMENTO DEL DÍA SEA</h2>

        <ul className="productos--cajas d-flex-col" role="list">
          <li className="caja" role="listitem">
            <figure className="productos--cajas--imagen" aria-hidden="true"></figure>
            <Servicio
              icono={"fa-solid fa-calendar-days"}
              nombre={"Reserva una mesa"}
              descripcion={"Llama en horario de apertura al 664 36 86 61 y reserva en el interior de nuestro local o en la terraza."}
            />
          </li>
          <li className="caja" role="listitem">
            <figure className="productos--cajas--imagen" aria-hidden="true"></figure>
            <Servicio
              icono={"fa-solid fa-bag-shopping"}
              nombre={"Take Away"}
              descripcion={"Pídenos lo que más te apetezca para recoger en cualquier momento por teléfono o desde la Web."}
            />
          </li>
          <li className="caja" role="listitem">
            <figure className="productos--cajas--imagen" aria-hidden="true"></figure>
            <Servicio
              icono={"fa-solid fa-bicycle"}
              nombre={"A domicilio"}
              descripcion={"Disfruta desde tu sofá con nuestro reparto a domicilio (solo en Vilagarcía). Llama por teléfono o pide por la Web."}
            />
          </li>
          <li className="caja" role="listitem">
            <figure className="productos--cajas--imagen" aria-hidden="true"></figure>
            <Servicio
              icono={"fa-solid fa-car"}
              nombre={"Caylu"}
              descripcion={"Recogida y reparto a domicilio (Vilagarcía, Vilanova, Cambados y alrededores)."}
            />
          </li>
        </ul>

        <Link
          className="productos--boton"
          to="/carta"
          aria-label="Ir a la carta"
        >
          Ver carta
        </Link>
      </section>

      <section className="galeria">
        <img src="https://i.imgur.com/yfuUZCK.jpeg" alt="Imagen del entrante Tequeños" className="galeria-1 d-none"/>
        <img src="https://i.imgur.com/LPLIVYJ.jpeg" alt="Imagen del entrante Nuggets Veggie" className="galeria-2 d-none"/>
        <img src="https://i.imgur.com/jLX7lM0.jpeg" alt="Imagen del menú 2x12" className="galeria-3"/>
        <img src="https://i.imgur.com/NHK61az.jpeg" alt="Imagen del entrante Gouda Rings" className="galeria-4 d-none"/>
        <img src="https://i.imgur.com/qZ79wZD.jpeg" alt="Imagen del entrante Alitas BBQ" className="galeria-5 d-none"/>
		  </section>
    </>
  )
}

export default Inicio
