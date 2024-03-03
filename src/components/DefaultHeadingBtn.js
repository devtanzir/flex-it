import React from "react";
import { Link } from "react-router-dom";

const DefaultHeadingBtn = (props) => {
  return (
    <>
      <div className="cta-area wow fadeInUp" data-wow-delay=".8s">
        <Link className="cta-btn btn-solid" to="/">
          {props.text} <i className="bi bi-arrow-right icon"></i>
        </Link>
      </div>
    </>
  );
};

export default DefaultHeadingBtn;
