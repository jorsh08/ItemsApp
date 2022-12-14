import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import './Navegacion.css'
function Navegacion() {
  return (
    <>
    <Navbar className='bgNav'  expand="md">
                <Container>
                    <Navbar.Brand><img src="src/components/home.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nv">
                            <Nav.Link className='text-white'>How We Work</Nav.Link>
                            <Nav.Link className='text-white'>Services</Nav.Link>
                            <Nav.Link className='text-white'>Free Quote</Nav.Link>
                            <Nav.Link className='text-white'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet>
                
            </Outlet>
    </>
  )
}

export default Navegacion