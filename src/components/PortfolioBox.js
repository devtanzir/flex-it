import React from "react";
import { Link } from "react-router-dom";

const PortfolioBox = (props) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 portfolio-item mobile">
        <div className="item">
          <Link className="portfolio-img-link" to="/">
            <img
              className="portfolio-img img-fluid"
              loading="lazy"
              src={props.img}
              alt="portfolio item photo"
            />
          </Link>
          <div className="item-info">
            <h3 className="item-title">{props.title}</h3>
            <i className="bi bi-arrow-right icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioBox;
