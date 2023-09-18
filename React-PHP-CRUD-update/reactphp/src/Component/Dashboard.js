import React, {  } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
 
export default function Dashboard() {
    const user = localStorage.getItem('user');
    return(
        <>
       <div className='d-flex'>
        <div className='col-md-3'>
          <Sidebar />
        </div>
        
        <div className="container">
        <Header />
            <h3>{user}</h3>
            <h3>Welcome to My Dashboard Page</h3>
        </div>
        </div>
        </>
    )
}
