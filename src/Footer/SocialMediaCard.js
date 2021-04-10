import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const SocialMediaCard = ({ social }) => {
  return (
    <>
      <ul>
        {social.map((social) => (
          <Link to="#">
            <li key={social.id}>{social.socialImg}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default SocialMediaCard;
