import React from "react";
import { assets } from "../../assets/assets";
import "./footer.css"

const Footer = () => {
  return (
    <div id="footer" className="footer">

      {/* TOP GRID */}
      <div className=" footer-content">

        {/* LEFT */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            nostrum pariatur, qui placeat harum laborum amet tenetur tempora
            quam eum hic.
          </p>

          <div className="footer-social-icon">
            <img  src={assets.facebook_icon} alt="Facebook" />
            <img  src={assets.twitter_icon} alt="Twitter" />
            <img  src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-content-center">
          <h2 className="">COMPANY</h2>
          <ul className="">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-content-right">
          <h2 className="">GET IN TOUCH</h2>
          <ul className="">
            <li>*1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="" />

      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Rights Reserved</p>

    </div>
  );
};

export default Footer;
