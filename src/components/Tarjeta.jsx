import React, {useState,  useContext } from 'react'
import MyContext from "./context/MyContext";
import './css/Tarjeta.css'

const SecondaryComponent = ({id}) => (
  <div>
    <h3>{id}</h3>
  </div>
);

function Tarjeta({titulo, imagen, id, cantidad}) {
  const {incrementar, restar} = useContext(MyContext);
  const [hover, setHover] = useState(false)
  const [itemSelect, setItemSelect] = useState(null)

  const aumentar = () => {
    incrementar(id)
  }

  const reducir = () => {
    restar(id)
  }

  const handleMouseEnter = (id) => {
    setHover(true)
    setItemSelect(id)
  }

  const handleMouseLeave = () => {
    setHover(false)
    setItemSelect(null)
  }

  return (
    <>
      <div className='row'>
        <div className='col'>
          {hover && itemSelect && (<SecondaryComponent id={id}/>)}
          <div onMouseEnter={() => {handleMouseEnter(id)}} onMouseLeave={handleMouseLeave} className='tarjeta'>
              <div className='item'>
                  <div className='row'>
                    <div className='col'>
                      <div className='row'>
                        <img src={imagen}/>
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