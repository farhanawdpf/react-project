import React from 'react'
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div> 
        <div className="sidebar">
            <a className="active" href="/">Home</a>
            <a href="/adduser">Add User</a>
            <a href="/userlist">User List</a>
            <a href="/productlist">Product List </a>
            <a href="/addproduct">Add product</a>
        </div>
    </div>
  )
}

export default Sidebar