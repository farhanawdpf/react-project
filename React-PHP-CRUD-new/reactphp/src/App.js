//import logo from './logo.svg';
import './Style.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Userlist from './Component/Userlist';
import Adduser from './Component/Adduser';
import Edituser from './Component/Edituser';
import Addproduct from './Component/Addproduct';
import Productlist from './Component/Productlist';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Protected from './Component/Protected';
import Dashboard from './Component/Dashboard';
import Sidebar from './Component/Sidebar';
import Addcat from './Component/Addcat';
import Catlist from './Component/Catlist';
import Editcat from './Component/Editcat';
import Editproduct from './Component/Editproduct';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
      <Route path="/userlist" element= { <Userlist/> } />
      <Route path="/adduser" element= { <Adduser/> } />
      <Route path="/edituser/:id" element= { <Edituser/> } />
      <Route path="/editProduct/:id" element= { <Editproduct/> } />
      <Route path="/addproduct" element= { <Addproduct/> } />
      <Route path="/productlist" element= { <Productlist/> } />
      <Route path="/addcat" element= { <Addcat/> } />
      <Route path="/catlist" element= { <Catlist/> } />
      <Route path="/editcat/:id" element= { <Editcat/> } />
      </Routes>
      <Footer/>    
 </div>
  );
}

export default App;
