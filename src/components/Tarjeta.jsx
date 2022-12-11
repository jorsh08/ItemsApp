import React from 'react'
import './Tarjeta.css'

function Tarjeta({titulo}) {
  return (
    <div className='tarjeta'>
        <div className='card-body'>
            <h4 className='titulo'>{titulo}</h4>
        </div>
        <div className='botones'>
            <button>+</button>
            <input type="text" className='contador' disabled/>
            <button>-</button>
        </div>
    </div>
  )
}

export default Tarjeta