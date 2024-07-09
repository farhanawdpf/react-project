import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

export default function MenuOthers() {
    return (
        <>
            <>
                {/*::header part start::*/}
                <header className="main_menu">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand" href="index.html">
                                        {" "}
                                        <img src="img/logo.png" alt="logo" />{" "}
                                    </a>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div
                                        className="collapse navbar-collapse main-menu-item justify-content-end"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <NavLink to="/" className="nav-link">
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/about" className="nav-link">
                                                    About
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/foodmenu" className="nav-link">
                                                    Menu
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/chefs" className="nav-link">
                                                    Chefs
                                                </NavLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="blog.html"
                                                    id="navbarDropdown"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Blog
                                                </a>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdown"
                                                >
                                                    <NavLink to="/blog" className="dropdown-item">
                                                        Blog
                                                    </NavLink>
                                                    <NavLink to="/singleblog" className="dropdown-item">
                                                        Single Blog
                                                    </NavLink>
                                                    <NavLink to="/elements" className="dropdown-item">
                                                        Elements
                                                    </NavLink>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/contact" className="nav-link">
                                                    Contact
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menu_btn">
                                        <a href="#" className="single_page_btn d-none d-sm-block">
                                            book a tabel
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header part end*/}
            </>

        </>
    )
}