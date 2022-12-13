import React from 'react'
import './Formulario.css'

function Formulario() {
  return (
    <div className='row'>
            <div className='col'>
                <div className='boxBotones'>
                    <button className='clear'>Clear</button>
                </div>
            </div>
            <div className='col'>
                <div className='boxBotones'>
                    <button className='calculate'>Calculate</button>
                </div>
            </div>
    </div>
  )
}

export default Formulario