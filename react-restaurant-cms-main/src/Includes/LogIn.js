import React, { useEffect } from 'react';
import $ from 'jquery';

function LogIn() {
  useEffect(() => {
    const handleBtnClick = () => {
      $("#ovrly").fadeIn();
      $("#login").show();
      $("#login").animate({ top: "100" });
    };

    const handleOverlayClick = () => {
      $("#ovrly").hide();
      $("#login").hide();
      $("#login").css("top", "-310px");
    };

    const handleCrossClick = () => {
      $("#ovrly").hide();
      $("#login").hide();
      $("#login").css("top", "-310px");
    };

    $("#btn").on('click', handleBtnClick);
    $("#ovrly").on('click', handleOverlayClick);
    $("#cross").on('click', handleCrossClick);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      $("#btn").off('click', handleBtnClick);
      $("#ovrly").off('click', handleOverlayClick);
      $("#cross").off('click', handleCrossClick);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
    <section>
      <button id="btn">LogIn</button>
      <div id="ovrly"></div>
      <div id="login">
        <button id="cross">&times;</button>
        <h1>Log In!</h1>
        <form>
          <input type="text" placeholder="enter your Email" className="txt" />
          <input type="password" placeholder="enter your password" className="pswd" />
          <input type="button" value="LogIn" id="btn" />
        </form>
      </div>
    </section>
    </>
  );
}

export default LogIn;
