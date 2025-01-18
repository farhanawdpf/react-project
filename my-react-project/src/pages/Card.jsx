import React from 'react';
const Card = () => {
    const headStyle = { color: 'red', fontSize: '3rem' };

    return (
        <div className="wrapper">
        <div className="content-wrapper">
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="card">
            <aside style={headStyle}>
                sidebar goes here
            </aside>
            <div style={{color: 'blue', width: '100px',backgroundColor: 'gray'}}> 
                this is box
                <button className='button'> click me</button>
            </div>
          </div>
          {/* /.card */}
        </section>
        {/* /.content */}
      </div>
    </div>
    );
};

export default Card;