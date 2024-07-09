import React from "react";
import { Outlet } from "react-router-dom";
import Mainmenu from "./MainMenu";
import Footer from "./Footer";

export default function HeadFoot() {

        import("../Others/main/style.css")
        import("../Others/main/bootstrap.min.css")

    return (
        <>
            <Mainmenu />
            <Outlet />
            <Footer />
        </>
    );
}
