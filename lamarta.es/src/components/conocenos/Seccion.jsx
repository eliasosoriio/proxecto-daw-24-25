import '../../styles/conocenos/Seccion.css'
import React from 'react'

function Seccion({imagen, textos, alt}) {
  return (
    <section className='conocenos--seccion d-flex-col'>
        {textos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <img src={imagen} alt={alt} />
    </section>
  )
}

export default Seccion
