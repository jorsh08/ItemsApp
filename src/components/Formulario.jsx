import React from 'react'
import './Formulario.css'

function Formulario() {
  return (
    <div className='row'>
            <div className='col'>
                <div className='boxBotones'>
                    <button>Clear</button>
                </div>
            </div>
            <div className='col'>
                <div className='boxBotones'>
                    <button>Calculate</button>
                </div>
            </div>
    </div>
  )
}

export default Formulario