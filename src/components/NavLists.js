import React from "react";
import { Link } from "react-router-dom";
import ListedItem from "./ListedItem";

const NavLists = () => {
  return (
    <>
      <ul className="list-js links-list">
        <li className="menu-item has-sub-menu">
          <Link className="menu-link active" to="/">
            home <i className="fas fa-plus plus-icon"> </i>
          </Link>
          <ul className="sub-menu">
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              home 1
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              home 2
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              home 3 [ Slider Style 1 ]
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              home 4 [ Slider Style 2 ]
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              home 5 [ RTL languages ]
            </ListedItem>
          </ul>
        </li>
        <ListedItem Li_Class="menu-item" Link_Class="menu-link" Link_to="/">
          about us
        </ListedItem>
        <li className="menu-item has-sub-menu">
          <Link className="menu-link" to="/">
            services<i className="fas fa-plus plus-icon"> </i>
          </Link>
          <ul className="sub-menu">
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              services
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              service single
            </ListedItem>
          </ul>
        </li>
        <li className="menu-item has-sub-menu">
          <Link className="menu-link" to="#0">
            portfolio <i className="fas fa-plus plus-icon"> </i>
          </Link>
          <ul className="sub-menu">
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              portfolio grid
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              portfolio blocks
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              portfolio Slider
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              portfolio single
            </ListedItem>
          </ul>
        </li>
        <li className="menu-item has-sub-menu">
          <Link className="menu-link" to="/">
            blog<i className="fas fa-plus plus-icon"> </i>
          </Link>
          <ul className="sub-menu">
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              blog home 1 colmun
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              blog home 2 colmun
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              blog home 3 colmun
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              single post
            </ListedItem>
          </ul>
        </li>
        <li className="menu-item has-sub-menu">
          <Link className="menu-link" to="/">
            pages<i className="fas fa-plus plus-icon"> </i>
          </Link>
          <ul className="sub-menu">
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              pricing plans
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              our team
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              team member
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              FAQ
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/"
            >
              404 page
            </ListedItem>
          </ul>
        </li>
        <ListedItem Li_Class="menu-item" Link_Class="menu-link" Link_to="/">
          contact us
        </ListedItem>
      </ul>
    </>
  );
};

export default NavLists;
