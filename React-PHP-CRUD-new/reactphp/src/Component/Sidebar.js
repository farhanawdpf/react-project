import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
 <aside className="sidebar">
        <div className="logo">
            {/* <img src="logo.png" alt="Company Logo"> */}
            <h2>Admin Dashboard</h2>
        </div>
       
        <ul className="menu">
            <li><Link to="/" className="active"><i className="fa fa-home"></i> Dashboard</Link></li>
            <li><Link to="/adduser"><i className="fa fa-user-plus"></i>Department</Link> </li>
            <li className="nav-item">
             <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              User management
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/adduser">Add User</a></li>
                <li><a className="dropdown-item" href="/userlist">Manage User</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Category
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/addcat">Add Category</a></li>
                <li><a className="dropdown-item" href="/catlist">Manage Category</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product management
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/addproduct">Add Product</a></li>
                <li><a className="dropdown-item" href="/productlist">Manage Product</a></li>
              </ul>
            </li>
            
            
            <li><Link to="/productlist"><i className="fa fa-calendar"></i> Attendance</Link></li>
            <li><Link to="/addproduct"><i className="fa fa-calendar-plus-o"></i> Leave Management</Link></li>
            <li><Link to="/salary"><i className="fa fa-money"></i> Salary</Link></li>
            <li><Link to="/reports"><i className="fa fa-bar-chart"></i> Reports</Link></li>


            <li><Link to="/conten"><i className="fa fa-bar-chart"></i> Fontend</Link></li>


        </ul>
    </aside>

    </div>
  )
}

export default Sidebar