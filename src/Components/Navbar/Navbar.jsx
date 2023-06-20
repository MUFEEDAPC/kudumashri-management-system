import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillBehanceSquare } from "react-icons/ai";
import {Link} from "react-router-dom"

const Navbars = () => {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Kudumpashree</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <AiFillBehanceSquare style={{marginLeft:"1040px",marginTop:"10px",height:"20px",width:"20px"}}/>
            <NavDropdown style={{marginLeft:"px"}} title="Name" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" ><Link  to="/" style={{textDecoration:"none",color:"black"}}>Logout</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Navbars