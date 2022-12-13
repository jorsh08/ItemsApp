import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import './Navegacion.css'
function Navegacion() {
  return (
    <>
    <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nv">
                            <Nav.Link >How We Work</Nav.Link>
                            <Nav.Link >Services</Nav.Link>
                            <Nav.Link >Free Quote</Nav.Link>
                            <Nav.Link >Contact</Nav.Link>
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