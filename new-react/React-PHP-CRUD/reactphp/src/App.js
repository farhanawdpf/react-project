//import logo from './logo.svg';
import './Style.css';
import { Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Home from './Component/Home';
import Userlist from './Component/Userlist';
import Adduser from './Component/Adduser';
import Edituser from './Component/Edituser';
import Addproduct from './Component/Addproduct';
import Productlist from './Component/Productlist';
import Protected from "./Component/Protected";
import Dashboard from "./Component/Dashboard";
import Login from "./Component/Login";

function App() {
  return (
    <div className="App">
     
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/userlist" element={<Userlist />} />
        <Route path="/edituser" element={<Edituser />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/protected" element={<Protected />} />
       
      </Routes>
     
 </div>
  )
}

export default App;
