import React from "react";

const StatsBox = (props) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-3 stat-box">
        <div className="stat-box-inner" data-tilt="data-tilt">
          <i className={`${props.icon} stat-icon`}></i>
          <p className="stat-num">
            <span
              className="counter"
              data-from={`${props.start}`}
              data-to={`${props.end}`}
              data-speed="3000"
              data-refresh-interval="50"
            ></span>
            <span className="sign">+</span>
          </p>
          <span className="stat-desc">{props.description}</span>
        </div>
      </div>
    </>
  );
};

export default StatsBox;
