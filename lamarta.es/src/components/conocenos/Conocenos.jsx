import React from 'react'
import HeaderSeccion from '../general/HeaderSeccion'
import Seccion from './Seccion'
import '../../styles/conocenos/Conocenos.css'
import ScrollArriba from '../general/ScrollArriba'

function Conocenos() {
  return (
    <>
      <ScrollArriba />
      <HeaderSeccion nombre={"Conócenos"}></HeaderSeccion>
      <section className="conocenos--secciones d-flex-col">
        <Seccion 
          imagen={"https://lamarta.es/assets/premiumbacon.JPG"}
          textos={["LAMARTA es un restaurante ubicado en el corazón de Vilagarcía de Arousa, Galicia. Abierto en enero de 2024, hecho para ser un lugar donde disfrutar en los desayunos, en las comidas y en las cenas de lo mejor.", "Nuestra especialidad son las smash burgers, disponibles solas o en menú. Nos enorgullece ofrecer una calidad excepcional a un precio justo. Además, ofrecemos una variedad de entrantes para complementar nuestras hamburguesas, disponibles tanto al mediodía como por la noche."]}
          alt={"Imagen de la sección conócenos de una premium bacon."}
        />
        <Seccion 
          imagen={"https://lamarta.es/assets/gracias.jpg"}
          textos={["En LAMARTA estamos profundamente comprometidos con nuestros clientes, buscando siempre incluiros y haceros participar en la experiencia del restaurante. Hemos puesto todo nuestro empeño y dedicación para crear un espacio acogedor y único.", "Hemos ganado el BURGER COMBAT REGIONAL 2024 a la mejor hamburguesa con la ONIONG RING y el premio como la tercera mejor hamburguesa de España en el BURGER COMBAT NACIONAL 2025. Agradecemos a todos nuestros clientes por su continuo apoyo y preferencia ya que sin vosotros no hubiese sido posible."]}
          alt={"Imagen de la sección conócenos del equipo dando las gracias."}
        />
      </section>
      <h2 className='conocenos--final'>Ven a LAMARTA y descubre por qué somos la joya de Vilagarcía de Arousa.</h2>
    </>
  )
}
 
export default Conocenos
