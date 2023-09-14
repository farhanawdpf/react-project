import React, {  } from "react";
import { useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
 
export default function Dashboard() {
    const naviget = useNavigate();
    function logoutSubmit(){
        localStorage.setItem("login", "");
        localStorage.setItem("loginStatus", "Logged out successfully!")
        naviget("/");
    }
    const user = localStorage.getItem('user');
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-primary" >
          <div className="container">
             <NavLink to="/" className="navbar-brand">Developer</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/userlist" className="nav-link">User List</NavLink>
            </li>  
            <li className="nav-item">
              <NavLink to="/adduser" className="nav-link">Add User</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to="/productlist" className="nav-link"> Product List</NavLink>
            </li> 
            <li className="nav-item">
              <NavLink to="/addproduct" className="nav-link">Add Product</NavLink>
            </li> 
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-gray" type="submit" onClick={logoutSubmit}>
                Logout
              </button>
            </div>
            </div>
          </div>
        </nav>
        <div className="container" style={{paddingTop: 50}}>
            <h3>{user}</h3>
            <h3>Dashboard Page</h3>
        </div>
        </>
    )
}

