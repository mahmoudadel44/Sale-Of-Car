import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaGooglePlusG,
// } from "react-icons/fa";
import SocialMediaData from "./SocialMediaData";
import "./Footer.css";
import Logo from "../images/Logo.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="foot">
          <div className="left-side">
            <img src={Logo} alt="Logo" />
            <div>
              <p>
                Buy new and used cars in UAE, shipping and delivery service are
                available, Sell your car at the highest price online with no
                worries visiting cars show rooms.
              </p>
            </div>
          </div>
          <div className="right-side">
            <p>
              Follow the first and the largest online auction in UAE and Middle
              East{" "}
            </p>
            <SocialMediaData />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
