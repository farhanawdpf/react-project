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
  
  )
}

export default Navbar
