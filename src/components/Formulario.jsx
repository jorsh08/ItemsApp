import React, {useContext, useEffect} from 'react'
import './Formulario.css'
import './Informacion.css'
import MyContext from "./MyContext";
function Formulario() {
    const {limpiarItems, calcularTotal, listaItems, select, espacio, descuento, total} = useContext(MyContext);
    useEffect(() => {
        listaItems();
      }, []);
  return (
    <>
    <div className='row'>
            <div className='col'>
                <div className='boxBotones'>
                    <button className='clear' onClick={limpiarItems}>Clear</button>
                </div>
            </div>
            <div className='col'>
                <div className='boxBotones'>
                    <button className='calculate' onClick={calcularTotal}>Calculate</button>
                </div>
            </div>
    </div>
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
                            <h2 className='d-flex justify-content-center'>Total items</h2>
                                <div className="row">
                                        <div className="col d-flex justify-content-center mt-3">Items selec</div>
                                        <div className="col d-flex justify-content-center align-items-center mt-3">{select}</div>
                                    </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-center mt-3">Espacio</div>
                                    <div className="col d-flex justify-content-center align-items-center mt-3"><p>{espacio.toFixed(2)} m<sup>2</sup></p></div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-center mt-1">Descuento</div>
                                    <div className="col d-flex justify-content-center align-items-center mt-1">{descuento}</div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-center mt-3">Total</div>
                                    <div className="col d-flex justify-content-center align-items-center mt-3">{total}</div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex justify-content-center mt-3">Total con desc</div>
                                    <div className="col d-flex justify-content-center align-items-center mt-3">{total-descuento}</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Formulario