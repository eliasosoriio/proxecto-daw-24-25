import "../../styles/general/NotFound.css";
import React from 'react'
import ScrollArriba from '../general/ScrollArriba'

function NotFound() {
  return (
    <>
      <ScrollArriba />
      <section className="not-found-404 d-flex-col">
        <h1>Error 404: Not Found</h1>
        <a href="/">Ir a inicio</a>
      </section>
    </>
  )
}

export default NotFound
