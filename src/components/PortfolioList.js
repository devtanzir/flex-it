import React from "react";

const PortfolioList = (props) => {
  return (
    <>
      <li
        className={`portfolio-btn ${props.activeclass}`}
        data-filter={`${props.filter}`}
      >
        {props.text}
      </li>
    </>
  );
};

export default PortfolioList;
