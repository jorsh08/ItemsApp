import React from 'react'
import Tarjetas from './Tarjetas'
import TituloSeleccion from './TituloSeleccion'
import './Main.css'
import Formulario from './Formulario'

function Main() {
  return (
    <>
      <div className="Main">
        <div className='row'>
          <div className='col'>
            <TituloSeleccion/>
            <Tarjetas/>
            <Formulario/>
          </div>
        </div>
      </div>
    
    </>
    )
}

export default Main