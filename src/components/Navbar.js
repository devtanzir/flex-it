import React from "react";

import NavLogo from "./NavLogo";
import NavLists from "./NavLists";
import NavController from "./NavController";

const Navbar = () => {
  return (
    <>
      <header className="page-header header-basic" id="page-header">
        <div className="header-search-box">
          <div className="close-search"></div>
          <form className="nav-search search-form" role="search">
            <div className="search-wrapper">
              <label className="search-lbl">Search for:</label>
              <input
                className="search-input"
                type="search"
                placeholder="Search..."
                name="searchInput"
                autofocus="autofocus"
              />
              <button className="search-btn" type="submit">
                <i className="bi bi-search icon"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="container">
          <nav className="menu-navbar">
            <NavLogo />
            <div className="links menu-wrapper">
              <NavLists />
            </div>
            <div className="controls-box">
              <NavController />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
