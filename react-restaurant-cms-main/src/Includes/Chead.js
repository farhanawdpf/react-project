import React from "react";
import { useLocation } from "react-router-dom";

export default function Chead() {
  const location = useLocation();

  const pname = location.pathname;
  return (
    <>
      {/* breadcrumb start*/}
      <section className="breadcrumb breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner text-center">
                <div className="breadcrumb_iner_item">
                  <h2>
                    {pname === "/about"
                      ? "About Us"
                      : pname === "/foodmenu"
                      ? "Food Menu"
                      : pname === "/chefs"
                      ? "Chefs"
                      : pname === "/blog"
                      ? "Our Blog"
                      : pname === "/singleblog"
                      ? "Blog Single"
                      : pname === "/elements"
                      ? "Elements"
                      : pname === "/contact"
                      ? "Contact"
                      : ""}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb start*/}
    </>
  );
}
