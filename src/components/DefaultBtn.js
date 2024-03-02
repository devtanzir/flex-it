import React from "react";
import { Link } from "react-router-dom";

const DefaultBtn = (props) => {
  return (
    <>
      <Link className={props.btn_className} to={props.to}>
        {props.text}
      </Link>
    </>
  );
};

export default DefaultBtn;
