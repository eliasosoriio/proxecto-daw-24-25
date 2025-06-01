import '../../styles/blog/Blog.css'
import React from 'react'
import HeaderSeccion from '../general/HeaderSeccion'
import Articulo from './Articulo'
import ScrollArriba from '../general/ScrollArriba'


const articulos = [
  {
    imagen: "https://vilagarciavirtual.com/uploads/imagenes-negocio/lamarta_02.jpg",
    titulo: "POV: Bienvenidos a Lamarta",
    descripcion: "Esto no es un video de hamburguesas cualquiera. Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio.",
    link: "https://www.youtube.com/watch?v=VtM4N8R3szc"
  },
  {
    imagen: "https://lamarta.es/assets/g3.jpg",
    titulo: "La mejor hamburguesa de Galicia se prepara en Lamarta de Vilagarcía",
    descripcion: "Su Onion Ring mejorada competirá con otras cinco «burguers» por el campeonato de España en el Salón Gourmets.",
    link: "https://www.lavozdegalicia.es/noticia/arousa/vilagarcia-de-arousa/2025/03/12/mejor-hamburguesa-galicia-prepara-lamarta-vilagarcia/0003_202503A12C4992.htm"
  },
  {
    imagen: "https://i.ytimg.com/vi_webp/VtM4N8R3szc/maxresdefault.webp",
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
    imagen: "https://estaticos-cdn.prensaiberica.es/clip/afcad837-f356-4c6d-83e7-076b204b6ecf_original-libre-aspect-ratio_default_0.jpg",
    titulo: "Onion Belly: una de las mejores hamburguesas de España",
    descripcion: "José Jamardo, de Lamarta, ha ganado el tercer premio en el Burger Combat nacional.",
    link: "https://www.lavozdegalicia.es/noticia/arousa/vilagarcia-de-arousa/2025/04/08/hamburguesa-medalla-vilagarcia/0003_202504A8C5992.htm"
  },
  {
    imagen: "https://i.ytimg.com/vi_webp/VtM4N8R3szc/maxresdefault.webp",
    titulo: "POV: Esto se nos fue de las manos",
    descripcion: "Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio.",
    link: "https://www.youtube.com/watch?v=MOo3qj1dx8k&t=546s"
  },
];

function Blog() {
  return (
    <>
      <ScrollArriba />
      <HeaderSeccion nombre="Blog" />

      {/* SE MUESTRAN LOS ARTÍCULOS Y VÍDEOS */}
      <h2 className='blog--titulo'>PULSA EN UN ARTÍCULO O VÍDEO</h2>
      <section className="blog--secciones d-flex-col" aria-label="Artículos y vídeos del blog">
        {[...articulos].reverse().map((a, i) => (
          <Articulo 
            key={i}
            imagen={a.imagen}
            titulo={a.titulo}
            descripcion={a.descripcion}
            href={a.link}
          />
        ))}
      </section>
    </>
  )
}

export default Blog;
