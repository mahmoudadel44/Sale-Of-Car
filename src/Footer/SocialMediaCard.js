import React from "react";
import "./Footer.css";
const SocialMediaCard = ({ social }) => {
  return (
    <>
      <ul>
        {social.map((social) => (
          <li key={social.id}>{social.socialImg}</li>
        ))}
      </ul>
    </>
  );
};

export default SocialMediaCard;
