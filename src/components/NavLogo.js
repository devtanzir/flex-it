import React from "react";
import { Link } from "react-router-dom";
import logoLight from "../assets/Image/logo/logo-light.png";
import logoDark from "../assets/Image/logo/logo-dark.png";

const NavLogo = () => {
  return (
    <>
      <div className="header-logo">
        <Link className="logo-link" to="#">
          <img
            className="logo-img light-logo"
            loading="lazy"
            src={logoLight}
            alt="logo"
          />
          <img
            className="logo-img dark-logo"
            loading="lazy"
            src={logoDark}
            alt="logo"
          />
        </Link>
      </div>
    </>
  );
};

export default NavLogo;
