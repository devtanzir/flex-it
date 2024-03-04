import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = ({ to, text }) => {
  return (
    <>
      <li className="footer-menu-item">
        <i className="bi bi-arrow-right icon"></i>
        <Link className="footer-menu-link" to={to}>
          {text}
        </Link>
      </li>
    </>
  );
};

export default FooterLinks;
