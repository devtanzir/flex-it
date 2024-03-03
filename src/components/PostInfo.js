import React from "react";
import { Link } from "react-router-dom";

const PostInfo = (props) => {
  return (
    <>
      <Link className={`info ${props.className}`} to={props.to}>
        <i className={`bi ${props.icon} icon`}></i>
        {props.text}
      </Link>
    </>
  );
};

export default PostInfo;
