import React from 'react'
import './Tarjeta.css'

function Tarjeta({titulo, imagen, cantidad}) {



  return (
    <>
    <div className='row'>
      <div className='col'>
        <div className='tarjeta'>
            <div className='item'>
                <div className='row'>
                  <div className='col'>
                    <div className='row'>
                      <img className='itemIcon' src={imagen} width="100%" height="100%"/>
                    </div>
                    <div className='row'>
                      <h4 className='titulo'>{titulo}</h4>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div className='botones'>
                <button className='boton'>+</button>
                <input type="text" className='contador' value={cantidad} disabled/>
                <button className='boton'>-</button>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Tarjeta