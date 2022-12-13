import React from 'react'
import Tarjeta from './Tarjeta'

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
    },
    {
      id: '11',
      titulo: 'Microwave',
      cantidad: 0,
      metros: 0.8
    },
    {
      id: '12',
      titulo: 'Computer',
      cantidad: 0,
      metros: 0.5
    }
]

function Tarjetas() {
  return (
    <div className="row ">
        {items.map((item) =>(
            <div className='col-xl-2 col-md-4 col-6 tarjetas' key={item.id}>
                <Tarjeta titulo={item.titulo} imagen={"src/components/"+item.id+".png"} cantidad={item.cantidad}/>
            </div>
        ))}
    </div>
  )
}

export default Tarjetas