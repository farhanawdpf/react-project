import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Elements from "./Pages/Elements/Elements";
import Blog from "./Pages/Blog/Blog";
import ChefsPage from "./Pages/Chefs/ChefsPage";
import Contact from "./Pages/Contact/Contact";
import FoodMenu from "./Pages/FoodMenu/FoodMenu";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import NoPage from "./Pages/NoPage";
import HeadFoot from "./Includes/HeadFoot";
import BreadCrumb from "./Includes/Breadcrumb";
import FullPart from "./Admin/Fixed/FullPart";
import Dashboard from "./Admin/Pages/Dashboard";
import ItemsAdd from "./Admin/Pages/Items/ItemsAdd";
import ItemsList from "./Admin/Pages/Items/ItemsList";
import ItemsEdit from "./Admin/Pages/Items/ItemEdit";
import ChefsAdd from "./Admin/Pages/Chefs/ChefsAdd";
import ChefsList from "./Admin/Pages/Chefs/ChefsList";
import ChefEdit from "./Admin/Pages/Chefs/ChefEdit";
import Adminx from "./Admin2/Adminx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeadFoot />}>
        <Route index element={<Home />} />
        <Route path="/" element={<BreadCrumb />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/elements" element={<Elements />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chefs" element={<ChefsPage />} />
          <Route path="/foodmenu" element={<FoodMenu />} />
          <Route path="/singleblog" element={<SingleBlog />} />
        </Route>
      </Route>
      <Route path="*" element={<NoPage />} />
      <Route path="/admin" element={<FullPart />}>
        <Route index element={<Dashboard />} />
        <Route path="items" element={<ItemsAdd />} />
        <Route path="itemslist" element={<ItemsList />} />
        <Route path="itemedit/:id" element={<ItemsEdit />} />
        <Route path="chefadd" element={<ChefsAdd />} />
        <Route path="cheflist" element={<ChefsList />} />
        <Route path="chefedit/:id" element={<ChefEdit />} />
      </Route>
        <Route path="admin2" element={<Adminx />} />
    </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
