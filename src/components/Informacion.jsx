import React from 'react'
import './Informacion.css'

function Informacion() {
  return (
    <div className='row'>
        <div className='col'>
            <div className='informacion'>
                <div className='row'>
                    <div className='col'>
                        <h1>Summary</h1>
                    </div>
                </div>
            </div>
            <div className='informacion'>
                <div className='row'>
                    <div className='col'>
                        <div className='resultados'>
                            <p>Total items</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Informacion