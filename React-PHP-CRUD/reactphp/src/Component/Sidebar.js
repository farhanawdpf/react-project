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
            <li><Link to="/employee"><i className="fa fa-users"></i> Employees</Link></li>
            <li><Link to="/department"><i className="fa fa-user-plus"></i>Department</Link></li>
            <li><Link to="/attendance"><i className="fa fa-calendar"></i> Attendance</Link></li>
            <li><Link to="/leave"><i className="fa fa-calendar-plus-o"></i> Leave Management</Link></li>
            <li><Link to="/salary"><i className="fa fa-money"></i> Salary</Link></li>
            <li><Link to="/reports"><i className="fa fa-bar-chart"></i> Reports</Link></li>


            <li><Link to="/conten"><i className="fa fa-bar-chart"></i> Fontend</Link></li>


        </ul>
    </aside>

    </div>
  )
}

export default Sidebar