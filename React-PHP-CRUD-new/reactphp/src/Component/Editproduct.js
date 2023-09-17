import axios from "axios";
import React, {useState, useEffect }from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Editproduct()
{   
    const navigate= useNavigate();  
    const {id}=   useParams();
    const [formvalue, setFormvalue]= useState({ptitle:'', pprice:''});
    const [message, setMessage]= useState('');

    const handleInput =(e)=>{
        setFormvalue({...formvalue, [e.target.name]:e.target.value});
    }
    useEffect( ()=>{
        const fgh= async()=>{
         const getProductData= await fetch("http://localhost/React-PHP-CRUD-new/api/product.php/"+id);
         const resuserdata= await getProductData.json();        
         setFormvalue(resuserdata);
        }
        fgh();
    },[]);

    const handleSubmit =async(e)=>{
         e.preventDefault();
        //  console.log(formvalue);
         const formData= {id:id,ptitle:formvalue.ptitle, pprice:formvalue.pprice}; 
         const res= await axios.put("http://localhost/React-PHP-CRUD-new/api/product.php",formData);
         //let jsonres= res.data.json();        
           if(res.data.success)
           {
            setMessage(res.data.success);
            setTimeout( ()=>{               
                navigate('/productlist');
            }, 2000);
           
           }
        }   
    return(
        <React.Fragment>
            <div className='d-flex'>
            <div className='col-md-3'>
                <Sidebar />
            </div>
            <div className="container">
            <Header />
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Adduser </h5> 
                        <p className="text-sucess"> { message }</p>                 
                         <form onSubmit={ handleSubmit}>
                            <div className="mb-3 row">
                            <label className="col-sm-2">Product Title</label>
                            <div className="col-sm-10">
                            <input type="text" name="ptitle" value={formvalue.ptitle} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>
                            <div className="mb-3 row">
                            <label  className="col-sm-2">Product Price</label>
                            <div className="col-sm-10">
                            <input type="text" name="pprice" value={formvalue.pprice} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>


                            <div className="mb-3 row">
                            <label className="col-sm-2"></label>
                            <div className="col-sm-10">
                           <button  name="submit" className="btn btn-success">Update</button>
                            </div>
                            </div>

                         </form>
      
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    );
}
export default Editproduct