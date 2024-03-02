import React from "react";

const ServiceBox = (props) => {
  return (
    <>
      <div
        className="box service-box wow fadeInUp reveal-start"
        data-wow-offset="0"
        data-wow-delay=".1s"
      >
        <div className="service-icon">
          <i className={`${props.icon} font-icon`}></i>
        </div>
        <span className="service-num hollow-text">1 </span>
        <div className="service-content">
          <h3 className="service-title">{props.title}</h3>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            repellendus minima reiciendis nobis dolore obcaecati.
          </p>
        </div>
        <a className="read-more" href="service-single.html">
          read more<i className="bi bi-arrow-right icon"></i>
        </a>
      </div>
    </>
  );
};

export default ServiceBox;
