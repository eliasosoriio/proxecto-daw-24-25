import '../../styles/conocenos/Seccion.css'
import React from 'react'

function Seccion({imagen, textos}) {
  return (
    <section className='conocenos--seccion d-flex-col'>
        {textos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <img src={imagen} alt="Imagen de la sección conócenos" />
    </section>
  )
}

export default Seccion
