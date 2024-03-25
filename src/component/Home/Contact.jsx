import React from "react";
import "./Contact.css";
import a from "./../../assets/home/saveLife.png";

function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <img src={a} alt="" />
      </div>
      <div >
        <div className="head">
          <h1 style={{ fontSize: "50px" }}>CONTACT US</h1>
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Enter Your Email</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input bg-white input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Enter Your Doubt</span>
          </div>
          <textarea 
            type="text"
            placeholder="Type here"
            className="textarea input-bordered"
          />
        </label>
        <div className="button">
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
