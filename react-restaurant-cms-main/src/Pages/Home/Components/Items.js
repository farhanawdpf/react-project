import React from 'react'

export default function Items({d}) {



    return (
        <>
            <div className="col-sm-6 col-lg-4">
                <div className="single_blog_item">
                    <div className="single_blog_img">
                        <img src={`http://localhost/reactjs/dingo/backend/images/${d.photo}`} alt="" />
                    </div>
                    <div className="single_blog_text">
                        <h3>{d.name}</h3>
                        <p>
                            {d.details}{" "}
                        </p>
                        <a href="#" className="btn_3">
                            Read More <img src="img/icon/left_2.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
