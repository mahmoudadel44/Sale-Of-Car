import React from "react";
import SociaMediaCard from "./SocialMediaCard";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";
const data = [
  {
    id: 1,
    socialImg: <FaFacebookF />,
  },
  {
    id: 2,
    socialImg: <FaTwitter />,
  },
  {
    id: 3,
    socialImg: <FaYoutube />,
  },
  {
    id: 5,
    socialImg: <FaInstagram />,
  },
  {
    id: 6,
    socialImg: <FaGooglePlusG />,
  },
];

const SocialMediaData = () => {
  console.log("data", data);
  return <SociaMediaCard social={data} />;
};

export default SocialMediaData;
