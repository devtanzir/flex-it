import React from "react";

const InfoItem = (props) => {
  return (
    <>
      <div className={props.gridClass}>
        <div className="info-item">
          {props.icon && <i className={`${props.icon} info-icon`}></i>}
          {props.number && <span className="info-number">{props.number}</span>}
          <div className="info-content">
            <h5 className="info-title">{props.title}</h5>
            <p className="info-text">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoItem;
