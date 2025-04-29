import "../../styles/inicio/Inicio.css";
import React from 'react'
import Servicio from "./Servicio";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <section className="portada">
        <div className="portada--contenido d-flex-col">
          <h1>LAMARTA - THE BEST BURGUER BAR</h1>
          <p>HAZ TU PEDIDO</p>
          <p>YA POR LA <span>WEB</span></p>
          <a 
            href="https://r.qamarero.com/lamarta?mode=PICKUP"
            target="_blank" 
            rel="noopener noreferrer"
          >
            PEDIR
          </a> 
        </div>
      </section>

      <section className="productos">
        <h3>NO IMPORTA QUE MOMENTO DEL DÍA SEA</h3>

        <div className="productos--cajas d-flex-col">
          <article className="caja">
            <div className="productos--cajas--imagen" aria-hidden="true"></div>
            <Servicio 
              icono={"fa-solid fa-calendar-days"} 
              nombre={"Reserva una mesa"}
              descripcion={"Llama en horario de apertura al 664 36 86 61 y reserva en el interior de nuestro local o en la terraza."}
            />
          </article>
          <article className="caja">
            <div className="productos--cajas--imagen" aria-hidden="true"></div>
            <Servicio 
              icono={"fa-solid fa-bag-shopping"} 
              nombre={"Take Away"}
              descripcion={"Pídenos lo que más te apetezca para recoger en cualquier momento por teléfono o desde la Web."}
            />
          </article>
          <article className="caja">
            <div className="productos--cajas--imagen" aria-hidden="true"></div>
            <Servicio 
              icono={"fa-solid fa-bicycle"} 
              nombre={"A domicilio"}
              descripcion={"Disfruta desde tu sofá con nuestro reparto a domicilio (solo en Vilagarcía). Llama por teléfono o pide por la Web."}
            />
          </article>
          <article className="caja">
            <div className="productos--cajas--imagen" aria-hidden="true"></div>
            <Servicio 
              icono={"fa-solid fa-car"} 
              nombre={"Caylu"}
              descripcion={"Recogida y reparto a domicilio (Vilagarcía, Vilanova, Cambados y alrededores)."}
            />
          </article>
        </div>

        <Link 
          className="productos--boton" 
          to="/carta" 
          aria-label="Ir a la carta"
        >
          Ver más
        </Link>
      </section>

      <section className="galeria">
        <img src="src\assets\img\entrantes\tequeños.jpg" alt="Imagen del entrante Tequeños" className="galeria-1 d-none"/>
        <img src="src\assets\img\entrantes\nuggetsveggie.png" alt="Imagen del entrante Nuggets Veggie" className="galeria-2 d-none"/>
        <img src="src\assets\img\promociones\menu2x12.png" alt="Imagen del menú 2x12" className="galeria-3"/>
        <img src="src\assets\img\entrantes\gouda.png" alt="Imagen del entrante Gouda Rings" className="galeria-4 d-none"/>
        <img src="src\assets\img\entrantes\alitas.png" alt="Imagen del entrante Alitas BBQ" className="galeria-5 d-none"/>
		  </section>
    </>
  )
}

export default Inicio
