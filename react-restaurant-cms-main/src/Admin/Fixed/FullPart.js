import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBarAdmin from './SideBarAmin'
import HeadAdmin from './HeadAdmin'
import FootAdmin from './FootAdmin'



export default function FullPart() {

  import("../../Others/admin/style.css")
  import("../../Others/admin/bootstrap.min.css")

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/admin') {
      window.location.reload();
    }
  }, [location.pathname]);

  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        <SideBarAdmin />
        <div className="content">
          <HeadAdmin />
          <Outlet />
          {/* <FootAdmin /> */}
        </div>
      </div>
    </>
  )
}
