import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function CustomerReview() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 2000
      };
    
      return (
        <section className="review_part gray_bg section_padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="section_tittle">
                  <p>Testimonials</p>
                  <h2>Customers Feedback</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-11">
                <Slider {...settings}>
                  <div className="client_review_single media">
                    <div className="client_img align-self-center">
                      <img src="img/client/client_1.png" alt="" />
                    </div>
                    <div className="client_review_text media-body">
                      <p>
                        Also made from. Give may saying meat there from heaven it
                        lights face had is gathered god dea earth light for life may
                        itself shall whales made they're blessed whales also made from
                        give may saying meat. There from heaven it lights face had
                        amazing place
                      </p>
                      <h4>
                        Mosan Cameron, <span>Executive of fedex</span>
                      </h4>
                    </div>
                  </div>
                  <div className="client_review_single media">
                    <div className="client_img align-self-center">
                      <img src="img/client/client_1.png " alt="" />
                    </div>
                    <div className="client_review_text media-body">
                      <p>
                        Also made from. Give may saying meat there from heaven it
                        lights face had is gathered god dea earth light for life may
                        itself shall whales made they're blessed whales also made from
                        give may saying meat. There from heaven it lights face had
                        amazing place
                      </p>
                      <h4>
                        Mosan Cameron, <span>Executive of fedex</span>
                      </h4>
                    </div>
                  </div>
                  <div className="client_review_single media">
                    <div className="client_img align-self-center">
                      <img src="img/client/client_1.png" alt="" />
                    </div>
                    <div className="client_review_text media-body">
                      <p>
                        Also made from. Give may saying meat there from heaven it
                        lights face had is gathered god dea earth light for life may
                        itself shall whales made they're blessed whales also made from
                        give may saying meat. There from heaven it lights face had
                        amazing place
                      </p>
                      <h4>
                        Mosan Cameron, <span>Executive of fedex</span>
                      </h4>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      );
}
