import React from 'react'
import imagen1 from '../assets/1.png'
import './Form.css'

const items = [
    {
        id: '1',
        titulo: 'Beds',
        cantidad: 0,
        metros: 1.2
    },
    {
        id: '2',
        titulo: 'Refrigerador',
        cantidad: 0,
        metros: 1
    },
    {
        id: '3',
        titulo: 'Furniture',
        cantidad: 0,
        metros: 0.5
    },
    {
        id: '4',
        titulo: 'Oven',
        cantidad: 0,
        metros: 0.6
    },
    {
        id: '5',
        titulo: 'Sofa',
        cantidad: 0,
        metros: 1.5
    },
    {
        id: '6',
        titulo: 'TV',
        cantidad: 0,
        metros: 0.25
    },
    {
        id: '7',
        titulo: 'Washer-dryer',
        cantidad: 0,
        metros: 0.5
    },
    {
        id: '8',
        titulo: 'Dining',
        cantidad: 0,
        metros: 2
    },
    {
        id: '9',
        titulo: 'Desk',
        cantidad: 0,
        metros: 0.75
    },
    {
        id: '10',
        titulo: 'Wardrobe',
        cantidad: 0,
        metros: 3.2
    }
]

function Form() {
  return (
    <>
        {items.map((item) => (
            <div className='container'  key={item.id}>
                <div className='row item ' >
                    <div className='col'>
                        <div className='row icono'>
                            <div className='row'>
                                <div className='col d-flex justify-content-center'>
                                    <img src={imagen1}/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col d-flex justify-content-center'>
                                    <h1>{item.titulo}</h1>
                                </div>
                            </div>
                        </div>
                        <div className='row contador'>
                            <div className='col d-flex justify-content-center'>
                                <input type='button' className='w-100' value='-'></input>
                            </div>
                            <div className='col-6 d-flex justify-content-center'>
                                <input type='text' className='w-100 inputItem' disabled value={item.cantidad}></input>
                            </div>
                            <div className='col d-flex justify-content-center'>
                                <input type='button' className='w-100' value='+'></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default Form