import React from "react";
import fbLogo from "/icons8-facebook-48.png";
import twLogo from "/icons8-twitter-50.png";
import igLogo from "/icons8-instagram-50.png";
import linLogo from "/icons8-linkedin-50.png";
import iconNext from "/icons8-next-50.png";
const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="footer-top-left">
        <span>Don't Miss A Beat.</span>
        <span>Subscribe And Stay Connected</span>
      </div>

      <div className="footer-top-mid">
        <label>Email</label>
        <div className="email-content">
          <input type="email" />
          <button className="btn-next">
            <img src={iconNext} alt="" />
          </button>
        </div>
      </div>

      <div className="footer-top-right">
        <div>Follow us on Social</div>
        <div className="png-web">
          <img src={fbLogo} alt="" />
          <img src={twLogo} alt="" />
          <img src={igLogo} alt="" />
          <img src={linLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
