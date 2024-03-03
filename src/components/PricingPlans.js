import React from "react";

const PricingPlans = (props) => {
  return (
    <>
      <div className="col-12 col-md-6 col-xl-3 mx-auto price-plan">
        <div
          className={`plan ${props.featured} wow fadeInUp`}
          data-wow-delay=".1s "
        >
          <div className="plan-head">
            <i className={`${props.icon} plan-icon`}></i>
            <h4 className="plane-name">{props.title}</h4>
            <div className="plan-price">
              <h3 className="price">
                {props.price}
                <sup className="currency-symbol">$</sup>
              </h3>
              <span className="per">per project</span>
            </div>
          </div>
          <div className="plan-details">
            <ul className="plan-list">
              <li className="plan-feat">
                <span className="feat-text"> 150 Lorem, ipsum dolor. </span>
              </li>
              <li className="plan-feat">
                <span className="feat-text"> 20 Lorem ipsum dolor sit . </span>
              </li>
              <li className="plan-feat">
                <span className="feat-text"> Lorem ipsum dolor sit. </span>
              </li>
              <li className="plan-feat">
                <span className="feat-text"> free Lorem ipsum dolor . </span>
              </li>
              <li className="plan-feat">
                <span className="feat-text"> added Lorem ipsum dolor. </span>
              </li>
            </ul>
          </div>
          <div className="plan-cta">
            <a className="cta-btn btn-outline" href="#0">
              select plan{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
