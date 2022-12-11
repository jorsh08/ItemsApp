import React from 'react'
import Tarjetas from './Tarjetas'
import TituloSeleccion from './TituloSeleccion'
import './Main.css'
import Formulario from './Formulario'
import Informacion from './Informacion'

function Main() {
  return (
    <>
      <div className="Main">
        <div className='row'>
          <div className='col'>
            <TituloSeleccion/>
            <Tarjetas/>
            <Formulario/>
            <Informacion/>
          </div>
        </div>
      </div>
    </>
    )
}

export default Main