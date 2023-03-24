import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300" id="footer">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#3A98B9]">Contact Us</h1>

        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://www.facebook.com/">
            {" "}
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://www.instagram.com/">
            {" "}
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com">
            {" "}
            <FaTwitterSquare size={30} />
          </a>
          <a href="https://github.com/depanshu357/TrackIt---CS253-Project">
            {" "}
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;