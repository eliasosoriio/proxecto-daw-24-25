import React from 'react'
import '../../styles/carta/ExplicacionMenu.css'

function ExplicacionMenu({explicacion}) {
  return (
    <div className='menu--explicacion'>
      <p>{explicacion}</p>
    </div>
  )
}

export default ExplicacionMenu
