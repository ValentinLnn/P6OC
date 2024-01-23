import React from 'react';
import logofooter from "../../assets/logo_footer.png"
import "./Footer.scss"
const Footer = () => {
    return (
      <footer className="footer">
        <img src={logofooter} alt="" className="footer_logo" />
        <p className="footer_text-copyright">
          © 2024 Kasa. All rights reserved
        </p>
      </footer>
    );
}

export default Footer;