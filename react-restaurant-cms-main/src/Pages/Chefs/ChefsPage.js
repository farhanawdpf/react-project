import React from "react";
import Chefs from "../Home/Components/Chefs";

export default function ChefsPage() {
  return (
    <>
      {/*::chefs_part start::*/}
      <Chefs/>
      {/*::chefs_part end::*/}
      {/* intro_video_bg start*/}
      <section className="intro_video_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro_video_iner text-center">
                <h2>Expect The Best</h2>
                <div className="intro_video_icon">
                  <a
                    id="play-video_1"
                    className="video-play-button popup-youtube"
                    href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                  >
                    <span className="ti-control-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* intro_video_bg part start*/}
    </>
  );
}
