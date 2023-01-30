import React, {useState,  useContext } from 'react'
import MyContext from "./MyContext";
import './Tarjeta.css'

function Tarjeta({titulo, imagen, id, cantidad}) {
  const {incrementar, restar} = useContext(MyContext);

  const aumentar = () => {
    incrementar(id)
  }

  const reducir = () => {
    restar(id)
  }
  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className='tarjeta'>
              <div className='item'>
                  <div className='row'>
                    <div className='col'>
                      <div className='row'>
                      </div>
                      <div className='row'>
                        <h4 className='titulo'>{titulo}</h4>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          <div className='botones'>
                  <button className='boton' onClick={aumentar}>+</button>
                  <input type="text" className='contador' value={cantidad} disabled/>
                  <button className='boton' onClick={reducir}>-</button>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Tarjeta