import React from "react";

const NavController = () => {
  return (
    <>
      {/* Menu Toggler button */}
      <div className="control menu-toggler">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* search Icon button */}
      <div className="control header-search-btn">
        <i className="bi bi-search icon"></i>
      </div>
      {/* Dark/Light mode button */}
      <div className="mode-switcher">
        <div className="switch-inner go-light" title="Switch To Light Mode ">
          <i className="bi bi-sun icon"></i>
        </div>
        <div className="switch-inner go-dark" title="Switch To Dark Mode ">
          <i className="bi bi-moon icon"></i>
        </div>
      </div>
      {/* mini shoping cart */}
    </>
  );
};

export default NavController;
