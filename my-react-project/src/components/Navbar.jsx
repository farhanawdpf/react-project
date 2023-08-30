import React from 'react'
import { NavLink } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
  return (
    <nav> 

            <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/blog" className="nav-link"> Blog</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/add-service">Add-service</NavDropdown.Item>
                  <NavDropdown.Item href="/service-list">
                   Manage service
                  </NavDropdown.Item>
        </NavDropdown>
    </nav>
    // <> 
    //  <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  
  )
}

export default Navbar
