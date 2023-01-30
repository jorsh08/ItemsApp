import React from 'react'
import Tarjetas from './Tarjetas'
import TituloSeleccion from './TituloSeleccion'
import './Main.css'
import Formulario from './Formulario'
import ItemsState from './ItemsState'

function Main() {

  return (
    <>
      <div className="Main">
        <div className='row'>
          <div className='col'>
            <ItemsState>
              <TituloSeleccion/>
              <Tarjetas />
              <Formulario />
            </ItemsState>
            </div>
        </div>
      </div>
    </>
    )
}

export default Main