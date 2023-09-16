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
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                User part
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item"  href="/adduser">Add user</a></li>
                <li><a className="dropdown-item" href="/userlist">Manage User</a></li>
              </ul>
            </div>
            
            
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