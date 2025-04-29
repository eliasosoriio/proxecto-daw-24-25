import '../../styles/blog/Blog.css'
import React from 'react'
import HeaderSeccion from '../general/HeaderSeccion'
import Articulo from './Articulo'

function Blog() {
  return (
    <>
      <HeaderSeccion nombre={"Blog"}></HeaderSeccion>
      <section className="blog--secciones d-flex-col">
        <Articulo 
          imagen={"https://i.ytimg.com/vi/VtM4N8R3szc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIhorf2GSvSfUXrHWrGtGqyGi-Tg"}
          titulo={"POV: Bienvenidos a Lamarta"}
          descripcion={"Esto no es un video de hamburguesas cualquiera. Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio."}
        />
        <Articulo 
          imagen={"https://i.ytimg.com/vi/VtM4N8R3szc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIhorf2GSvSfUXrHWrGtGqyGi-Tg"}
          titulo={"POV: Bienvenidos a Lamarta"}
          descripcion={"Esto no es un video de hamburguesas cualquiera. Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio."}
        />
        <Articulo 
          imagen={"https://i.ytimg.com/vi/VtM4N8R3szc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIhorf2GSvSfUXrHWrGtGqyGi-Tg"}
          titulo={"POV: Bienvenidos a Lamarta"}
          descripcion={"Esto no es un video de hamburguesas cualquiera. Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio."}
        />
        <Articulo 
          imagen={"https://i.ytimg.com/vi/VtM4N8R3szc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIhorf2GSvSfUXrHWrGtGqyGi-Tg"}
          titulo={"POV: Bienvenidos a Lamarta"}
          descripcion={"Esto no es un video de hamburguesas cualquiera. Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio."}
        />
        <Articulo 
          imagen={"https://i.ytimg.com/vi/VtM4N8R3szc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIhorf2GSvSfUXrHWrGtGqyGi-Tg"}
          titulo={"POV: Bienvenidos a Lamarta"}
          descripcion={"Esto no es un video de hamburguesas cualquiera. Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio."}
        />
        <Articulo 
          imagen={"https://i.ytimg.com/vi/VtM4N8R3szc/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCIhorf2GSvSfUXrHWrGtGqyGi-Tg"}
          titulo={"POV: Bienvenidos a Lamarta"}
          descripcion={"Esto no es un video de hamburguesas cualquiera. Durante 11 minutos vas a ver todo lo que pasa cuando en Lamarta nos lo tomamos en serio."}
        />
      </section>
    </>
  )
}
 
export default Blog
