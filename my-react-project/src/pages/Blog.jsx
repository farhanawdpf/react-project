import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <h1>
        <span className="d-block p-2 text-bg-primary">d-block</span>
        <span className="d-block p-2 text-bg-dark">d-block</span>This is Blog Page</h1>
      <div> 
        <Link to='demo'>Demo</Link>
        <Outlet />
      </div>
    </div>
  )
}

export default Blog