import React from "react";
import { Link } from "react-router-dom";

const FooterContactCard = (props) => {
  return (
    <>
      <div className="contact-info-card">
        <i className={`bi ${props.icon} icon`}></i>
        {props.links && (
          <Link className={props.className} to={props.to}>
            {props.links}
          </Link>
        )}
        {props.text && (
          <span className="text-lowercase info">{props.text}</span>
        )}
      </div>
    </>
  );
};

export default FooterContactCard;
