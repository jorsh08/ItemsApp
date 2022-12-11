import React from 'react'
import Form from './Main/Form'
import './Main.css'

function Main({titulo}) {
  return (
    <>
        <div className='card'>
          <div className='card-body'>
            <h4 className=''>{titulo}</h4>
          </div>
          <div className='card-footer'>
            <button>+</button>
          </div>
        </div>
    </>
    )
}

export default Main