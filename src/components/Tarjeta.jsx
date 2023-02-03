import React, {useState,  useContext } from 'react'
import MyContext from "./context/MyContext";
import './css/Tarjeta.css'

const SecondaryComponent = ({titulo, metros}) => (
  <div className='InfoCard'>
    <div className='DatosInfoCard'>
      <h4 className='tituloCard'>{titulo}</h4>
      <h5 >{metros} m<sup>2</sup></h5>
    </div>
  </div>
);

function Tarjeta({titulo, imagen, id, cantidad, metros}) {
  const {incrementar, restar} = useContext(MyContext);
  const [hover, setHover] = useState(false)
  const [itemSelect, setItemSelect] = useState(null)

  const aumentar = () => {
    incrementar(id)
  }

  const reducir = () => {
    restar(id)
  }

  const handleMouseEnter = (titulo, metros) => {
    setHover(true)
    setItemSelect(titulo, metros)
  }

  const handleMouseLeave = () => {
    setHover(false)
    setItemSelect(null)
  }

  const handleMouseClick = (titulo, metros) => {
    if (hover){
      setHover(false)
      setItemSelect(null)
    }else{
      setHover(true)
      setItemSelect(titulo, metros)
    }
  }

  return (
    <>
      <div className='row'>
        <div className='col'>
          <div onMouseEnter={() => {handleMouseEnter(titulo, metros)}} onMouseLeave={handleMouseLeave} onClick={()=> {handleMouseClick(titulo, metros)}} className='tarjeta'>
              <div className='item'>
              {hover && itemSelect && (<SecondaryComponent titulo={titulo} metros={metros}/>)}
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