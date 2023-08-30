import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <div> 
        <Link to='demo'>Demo</Link>
        <Outlet />
      </div>
    </div>
  )
}

export default Blog