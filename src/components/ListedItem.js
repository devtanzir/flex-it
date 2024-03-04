import React from "react";
import { NavLink } from "react-router-dom";

const ListedItem = (props) => {
  return (
    <>
      <li className={props.Li_Class} title={props.Li_Title}>
        <NavLink
          className={({ isActive }) =>
            `${props.Link_Class} ${isActive ? "active" : " "}`
          }
          to={props.Link_to}
          title={props.Link_Title}
        >
          {props.children}
        </NavLink>
      </li>
    </>
  );
};

export default ListedItem;
