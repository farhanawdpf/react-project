import axios from "axios";
import React, {useState, useEffect }from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Editproduct()
{   
    const navigate= useNavigate();  
    const {id}=   useParams();
    const[pfile, setPfile]= useState('');
    const [product, setproduct]= useState({ptitle:'', pprice:'', pfile:'', old_pfile_name: ''});
    const [message, setMessage]= useState('');

    const handleInput =(e)=>{
        setproduct({...product, [e.target.name]:e.target.value});
    }

    useEffect( ()=>{
        const userRowdata= async()=>{
         const getProductData= await fetch("http://localhost/React-PHP-CRUD-new/api/product.php/"+id);
        
         const resuserdata= await getProductData.json();        
         setproduct({...resuserdata, old_pfile_name: resuserdata.pfile});
        }
        userRowdata();
    },[]);

    const handleSubmit =async(e)=>{
         e.preventDefault();
         const formData= new FormData();
         formData.append('ptitle', product.ptitle);
         formData.append('id', id);
         formData.append('old_pfile_name', product.old_pfile_name);
         formData.append('pprice',product.pprice);
         formData.append('pfile', pfile);
         //console.log(product);
        //  const formData= {id:id,ptitle:product.ptitle, pprice:product.pprice, pfile:product.pfile, old_pfile_name: product.old_pfile_name}; 
        //  const formData= {id:id,...product, pfile}; 
         const res= await axios.put("http://localhost/React-PHP-CRUD-new/api/product.php",formData);
         console.log("rt",res)
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
                        <h5 className="mb-4">edit </h5> 
                        <p className="text-sucess"> { message }</p>                 
                         <form onSubmit={ handleSubmit}>
                            <div className="mb-3 row">
                            <label className="col-sm-2">Title</label>
                            <div className="col-sm-10">
                            <input type="text" name="ptitle" value={product.ptitle} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>
                            <div className="mb-3 row">
                            <label  className="col-sm-2">Price</label>
                            <div className="col-sm-10">
                            <input type="text" name="pprice" value={product.pprice} className="form-control" onChange={ handleInput}/>
                            </div>
                            </div>

                            <div className="mb-3 row">
                                <label  className="col-sm-3">Product Image</label>
                                <div className="col-sm-9">
                                <input type="file" className="form-control" onChange={(e)=>setPfile(e.target.files[0])} />
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