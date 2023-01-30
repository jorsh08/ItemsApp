import React, { useContext, useEffect }  from 'react'
import MyContext from "./MyContext";
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
                <Tarjeta titulo={item.titulo} imagen={"public/"+item.id+".png"} id={item.id} cantidad={item.cantidad}/>
            </div>
        ))}
      </div>
    </>
    
  )
}

export default Tarjetas