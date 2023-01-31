import React, { useReducer } from "react";
import MyContext from './context/MyContext'
import ItemsReducer from './context/ItemsReducer'
import { GET_ITEMS, INCREMENTAR, RESTAR, LIMPIAR_ITEMS, SELECT, ESPACIO, DESCUENTO, TOTAL } from './context/Types'
import {items as data} from './context/items'


const ItemsState = (props) => {

    const initialState = {
        items: [],
        select: 0,
        espacio: 0,
        descuento: 0,
        total: 0
    }

    const [state, dispatch] = useReducer(ItemsReducer, initialState)

    const listaItems = () => {
        dispatch({ type: GET_ITEMS, payload: data})
    }

    const incrementar = (id) => {
        state.items.forEach(element => {
            if(element.id === id){
                element.cantidad = element.cantidad + 1
            }
        });
        dispatch({ type: INCREMENTAR, payload: state})
        calcularTotal()
        listaItems()
    }

    const restar = (id) => {
        state.items.forEach(element => {
            (element.id === id) ? (element.cantidad > 1) ? element.cantidad = element.cantidad - 1 : element.cantidad = 0 : console.log('')
        });
        dispatch({ type: RESTAR, payload: state})
        calcularTotal()
        listaItems()
    }

    const limpiarItems = () => {
        state.items.forEach(element => {
            element.cantidad = 0
        });
        dispatch({ type: LIMPIAR_ITEMS, payload: state})
        listaItems()
    }

    const calcularTotal = () => {
        totalItems()
        sumarItems()
        sumarEspacio()
        calcularDescuento()
    }

    function totalItems(){
        state.items.forEach((element, i)  => {
            state.items[i] = {...element, totalEspacio: calcularMetros(element.cantidad, element.metros), totalPagar: calcularEspacio(calcularMetros(element.cantidad, element.metros), element.cantidad)}
        });
        listaItems()
    }

    function calcularMetros(cantidad, metros){
        return cantidad*metros
      }
    
      function calcularEspacio(metros, cantidad){
          return (metros > 0) ? (100*cantidad) + (100 * (metros/5).toFixed()) : 0
      }

      function calcularDescuento(){
        let sumaCantidad = 0
        let sumaTotal = 0
        state.items.forEach(item => {
            sumaCantidad = sumaCantidad + item.cantidad
            sumaTotal = sumaTotal + item.totalPagar
        });
        dispatch({ type: TOTAL, payload: sumaTotal})
        sumaCantidad >= 10 ? dispatch({ type: DESCUENTO, payload: sumaTotal*.25}): dispatch({ type: DESCUENTO, payload: 0})
        listaItems()
    }
    
      function sumarItems(){
        let suma = 0
        state.items.forEach((item) => {
          suma = suma + item.cantidad
        })
        dispatch({ type: SELECT, payload: suma})
        listaItems()
      }
    
      function sumarEspacio(){
        let suma = 0
        state.items.forEach((item) => {
          suma = suma + item.totalEspacio
        })
        dispatch({ type: ESPACIO, payload: suma})
        listaItems()
      }
    

  return (
    <MyContext.Provider
        value={{
            items: state.items,
            select: state.select,
            espacio: state.espacio,
            descuento: state.descuento,
            total: state.total,
            listaItems,
            incrementar,
            restar,
            limpiarItems,
            calcularTotal
        }}
    >
        {props.children}
    </MyContext.Provider>
  )
}

export default ItemsState