import React from 'react'

export default function ChefBlock({d}) {
  return (
    <>
      <div className="col-sm-6 col-lg-4">
        <div className="single_blog_item">
          <div className="single_blog_img">
            <img src={`http://localhost/reactjs/dingo/backend/images/${d.photo}`} alt="" />
          </div>
          <div className="single_blog_text text-center">
            <h3>{d.name}</h3>
            <p>{d.designation}</p>
            <div className="social_icon">
              <a href="#">
                {" "}
                <i className="ti-facebook" />{" "}
              </a>
              <a href="#">
                {" "}
                <i className="ti-twitter-alt" />{" "}
              </a>
              <a href="#">
                {" "}
                <i className="ti-instagram" />{" "}
              </a>
              <a href="#">
                {" "}
                <i className="ti-skype" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
