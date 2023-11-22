import React from "react";
import locationIcon from "/icons8-location-50.png";
const Leadform = () => {
  return (
    <div className="lead-form">
      <div className="lead-form-content">
        <div className="lead-form-text">
          <div className="lead-form-text-title">
            <span>Your Exclusive Offer</span>
          </div>
          <div className="lead-form-text-content">
            <span>
              Row House is committed to helping you start a rowing-based fitness
              routine that will improve your health and deliver unparalleled
              results. Move better, feel better and live better through Row
              House. Book your first class now.
            </span>
          </div>
        </div>

        <div className="lead-form-form">
          <h2 className="lead-form-form-title">FIRST CLASS FREE</h2>
          <p>*Available at Participating Studios.</p>
          <div className="lead-form-form-selector">
            <div className="icon-location">
              <img src={locationIcon} alt="" />
            </div>
            <div className="location-select">
              <span>YOUR LOCATION</span>
              <select className="select-item">
                <option>Chealse</option>
                <option>Other option</option>
                <option>Some option</option>
                <option>Other option</option>
                <option>Some option</option>
                <option>Other option</option>
                <option>Some option</option>
                <option>Other option</option>
              </select>
              <p>Change City or Zip Code</p>
            </div>
          </div>
          <div className="lead-form-form-container">
            <label>First name</label>
            <input className="inp-form" type="text" placeholder="First name" />

            <label>Last name</label>
            <input className="inp-form" type="text" placeholder="Last name" />

            <label>Email</label>
            <input className="inp-form" type="text" placeholder="Email" />

            <label>Phone number</label>
            <input
              className="inp-form"
              type="text"
              placeholder="Phone number"
            />
            <p style={{ fontSize: "10px", maxWidth: "65%" }}>
              By clicking “Try Row House,” you agree to our <a href="">Terms</a>{" "}
              and to receive automated marketing calls or texts from or on
              behalf of Row House at the phone number provided above. Consent is
              not a condition of purchase. Message and data rates may apply.
            </p>

            <div className="btn-submit">
              <button>TRY ROW HOUSE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadform;
