import React from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navegacion from './components/Navegacion'

function App() {
  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Navegacion/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      <div className='MainBG'>
        <Main/>
      </div>
    </div>
    </>
    
  )
}

export default App