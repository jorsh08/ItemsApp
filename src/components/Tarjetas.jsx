import React, { useContext, useEffect }  from 'react'
import MyContext from "./context/MyContext";
import Tarjeta from './Tarjeta'

function Tarjetas() {
  const itemsContext = useContext(MyContext);
  useEffect(() => {
    itemsContext.listaItems();
  }, []);

  

  return (
    <>
      <div className="row ">
        {itemsContext.items.map((item) =>(
            <div className='col-xl-2 col-md-4 col-6 tarjetas' key={item.id}>
                <Tarjeta titulo={item.titulo} imagen={item.img} id={item.id} cantidad={item.cantidad} metros={item.metros}/>
            </div>
        ))}
      </div>
    </>
    
  )
}

export default Tarjetas