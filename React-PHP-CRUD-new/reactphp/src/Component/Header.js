import React from "react";
// import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header()
{
  const naviget = useNavigate();
  function logoutSubmit(){
      localStorage.setItem("login", "");
      localStorage.setItem("loginStatus", "Logged out successfully!")
      naviget("/");
  }
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand justify-content-md-center" href="#">My Deshboard</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
              </ul>
              <div className="d-flex">
                <button className="btn btn-outline-primary" type="submit" onClick={logoutSubmit}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
        </React.Fragment>
    );
}
export default Header;