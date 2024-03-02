import React from "react";
import { Link } from "react-router-dom";

const ListedItem = (props) => {
  return (
    <>
      <li className={props.Li_Class} title={props.Li_Title}>
        <Link
          className={props.Link_Class}
          to={props.Link_to}
          title={props.Link_Title}
        >
          {props.children}
        </Link>
      </li>
    </>
  );
};

export default ListedItem;
