import '../../styles/blog/Blog.css'
import React from 'react'
import HeaderSeccion from '../general/HeaderSeccion'
import Articulo from './Articulo'

const articulos = [
  {
    imagen: "https://i.ytimg.com/an_webp/VtM4N8R3szc/mqdefault_6s.webp?du=3000&sqp=CP78ycAG&rs=AOn4CLDhmCP_kaKSarrcztVRvAC_XuAeGQ",
    titulo: "POV: Bienvenidos a Lamarta",
    descripcion: "Esto no es un video de hamburguesas cualquiera. Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio.",
    link: "https://www.youtube.com/watch?v=VtM4N8R3szc"
  },
  {
    imagen: "https://img.lavdg.com/sc/c5wgFUbVaMfbWQ0uRC4NnsmLFBs=/768x/2025/03/11/00121741722721960771850/Foto/AM12C4F5_205056.jpg",
    titulo: "La mejor hamburguesa de Galicia se prepara en Lamarta de Vilagarcía",
    descripcion: "Su Onion Ring mejorada competirá con otras cinco «burguers» por el campeonato de España en el Salón Gourmets.",
    link: "https://www.diariodearousa.com/articulo/vilagarcia/tercera-mejor-hamburguesa-espana-esta-vilagarcia-5247559"
  },
  {
    imagen: "https://i.ytimg.com/an_webp/TTJGlW3XNv8/mqdefault_6s.webp?du=3000&sqp=COvNycAG&rs=AOn4CLAr8X-XV3YpXWM1Vf3DADsZ51ix2A",
    titulo: "POV: Parece tranquilo...Pero así empieza TODO",
    descripcion: "No hay gritos, no hay prisas… solo plancha caliente, queso derritiéndose y patatas esperando su destino.",
    link: "https://www.youtube.com/watch?v=TTJGlW3XNv8"
  },
  {
    imagen: "https://estaticos-cdn.prensaiberica.es/clip/5429e09e-22c8-41eb-ada5-bf50cead3836_16-9-discover-aspect-ratio_default_0.webp",
    titulo: "La tercera mejor hamburguesa de España está en Vilagarcía",
    descripcion: "José Jamardo, chef del restaurante Lamarta, se colgó la medalla de bronce en el Burger Combat 2025.",
    link: "https://www.diariodearousa.com/articulo/vilagarcia/tercera-mejor-hamburguesa-espana-esta-vilagarcia-5247559"
  },
  {
    imagen: "https://img.lavdg.com/sc/l4kUT-wVx0ssb3AgA8bhUyD4BhM=/768x/2025/04/07/00121744048562147263235/Foto/AA8C5F2_19555.jpg",
    titulo: "Onion Belly: una de las mejores hamburguesas de España",
    descripcion: "José Jamardo, de Lamarta, ha ganado el tercer premio en el Burger Combat nacional.",
    link: "https://www.diariodearousa.com/articulo/vilagarcia/tercera-mejor-hamburguesa-espana-esta-vilagarcia-5247559"
  },
  {
    imagen: "https://i.ytimg.com/an_webp/MOo3qj1dx8k/mqdefault_6s.webp?du=3000&sqp=CIbXycAG&rs=AOn4CLARUydKN6u5AnhQG7J3yH94cRyBrw",
    titulo: "POV: Esto se nos fue de las manos",
    descripcion: "Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio.",
    link: "https://www.youtube.com/watch?v=MOo3qj1dx8k&t=546s"
  },
];

function Blog() {
  return (
    <>
      <HeaderSeccion nombre="Blog" />
      <section className="blog--secciones d-flex-col">
        {[...articulos].reverse().map((a, i) => (
          <a href={a.link} key={i} className="articulo--link" target="_blank" rel="noopener noreferrer">
            <Articulo 
              imagen={a.imagen}
              titulo={a.titulo}
              descripcion={a.descripcion}
            />
          </a>
        ))}
      </section>
    </>
  )
}

export default Blog;
