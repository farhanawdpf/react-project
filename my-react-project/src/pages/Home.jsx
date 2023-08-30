import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div> 
      <h1>My React website </h1>
      <p> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi asperiores voluptatibus minus ipsum voluptates cupiditate facilis. Ex saepe sunt doloribus, ipsa ipsam odio cum explicabo labore, earum esse amet?
      </p>
      <div>
      <nav>
        <Link to="/chennal">My Profile</Link>
        <Link to="/channel">My Profile</Link>
        <Link to="/channel">My Profile</Link>
      </nav>
      <Outlet />
    </div>
    </div>
  )
}

export default Home