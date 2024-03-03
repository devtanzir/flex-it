import React from "react";
import { Link } from "react-router-dom";

const FooterLinks = (props) => {
  return (
    <>
      <li className="footer-menu-item">
        <i className="bi bi-arrow-right icon"></i>
        <Link className="footer-menu-link" to={props.to}>
          {props.text}
        </Link>
      </li>
    </>
  );
};

export default FooterLinks;
