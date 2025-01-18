import React from 'react';

const Master = () => {
    const styleHead ={color:'red', backgroundColor: 'gray'};
    const products = 
        { 
            title: 'Cabbage',
            name: 'rr',
            color: 'red',
        }
        const data =['Rukaiya','Rajib','Sharmony','Munna','Imam','Rahat','Mirja'];
        const title ="This is title";
        const d = new Date();
        const m = d.getFullYear();
        console.log(products);
        console.log(data);

    return (
       <div className="wrapper">
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">

    {/* Content Header (Page header) */}
    {/* Main content */}
    <section className="content">
      {/* Default box */}
      <div className="card">
        <div style={styleHead}> 
            This is box
        </div>
        <div> 
            <h1>{title}</h1>
            <h1>{products.title}</h1>
            <h1>{data[0]}</h1>
            <h1>{data[1]}</h1>
            <h1>{data[2]}</h1>
        </div>
      </div>
      {/* /.card */}
    </section>
    {/* /.content */}
  </div>
  {/* /.con
  </div>
*/}</div>


    );
};

export default Master;