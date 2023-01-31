import React from 'react'
import './css/TituloSeleccion.css'

function TituloSeleccion() {
  return (
    <div className='row'>
        <div className='col'>
            <div className='box'>
                <div className='centrar'>
                    <div className='row'>
                        <h1>What items to store?</h1>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='row'>
                        <h5 className='second'>Select which items you wish to store before moving to your new home. We’ll keep ’em safe!</h5>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default TituloSeleccion