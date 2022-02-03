import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="foodyy">
        <h2>foodyy.</h2>
        <p>
          2022 Foodyy Inc. See Privacy Policy and Terms of Service Agreement
        </p>
      </div>

      <div className="contact_us">
        <p>Contact Us at support@blah.com</p>
      </div>

      <div className="socials">
        <InstagramIcon />
        <FacebookIcon />
      </div>
    </div>
  );
};

export default Footer;
