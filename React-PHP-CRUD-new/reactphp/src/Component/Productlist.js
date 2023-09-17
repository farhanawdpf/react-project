import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";

function Productlist()
{ 
  const[product, setProduct]= useState([]);
  const [message, setMessage]= useState('');
 
  useEffect( ()=>{   
  getProductData();
  },[]);

const getProductData= async()=>{
  const reqData= await fetch("http://localhost/React-PHP-CRUD-new/api/product.php");
  const resData= await reqData.json();           
  setProduct(resData);
   } 

const handleDelete= async(id)=>{
 const res= await axios.delete("http://localhost/React-PHP-CRUD-new/api/product.php/"+id);
 setMessage(res.data.success);
 getProductData();   
}
  
    return(
        <React.Fragment>
            <div className='d-flex'>
            <div className='col-md-3'>
                <Sidebar />
            </div>
            <div className="container container_overflow">
            <Header />
                <div className="row">
                    <div className="col-md-10 mt-4">
                        <h5 className="mb-4">Product List</h5> 
                        <p className="text-danger">{ message} </p>                                 
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Product Title</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">product Status</th>
                                <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((pdata, index)=>(
                                            <tr key={index}>
                                            <td>{index+1 } </td>
                                            <td>{pdata.ptitle } </td>
                                            <td>{pdata.pprice } </td>
                                            <td><img src={`http://localhost//React-PHP-CRUD-new/reactcrudphp/${pdata.pimage}`} height={50} width={90} /></td>
                                            <td>{ pdata.status==1?"Active":"Inactive"} </td>
                                            <td>
                                            <Link to={"/editproduct/"+pdata.id} className="btn btn-success mx-2">Edit</Link>
                                             <button className="btn btn-danger" onClick={ ()=>handleDelete(pdata.id)}>Delete</button>
                                            </td>
                                            </tr>
                                        ))
                                    }
                              
                                                               
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}
export default Productlist;