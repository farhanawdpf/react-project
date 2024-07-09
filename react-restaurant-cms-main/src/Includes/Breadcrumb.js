import React from "react";
import { Outlet } from "react-router-dom";
import Chead from "./Chead";


export default function BreadCrumb() {

    return (
        <>
            <Chead/>
            <Outlet />
        </>
    )
}