import React from "react";
import ListedItem from "./ListedItem";
import { NavLink } from "react-router-dom";

const NavLists = () => {
  return (
    <>
      <ul className="list-js links-list">
        <li className="menu-item has-sub-menu">
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
            to="/"
          >
            home <i className="fas fa-plus plus-icon"> </i>
          </NavLink>
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
              Link_to="/home2"
            >
              home 2
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/home3"
            >
              home 3 [ Slider Style 1 ]
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/home4"
            >
              home 4 [ Slider Style 2 ]
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/home5"
            >
              home 5 [ RTL languages ]
            </ListedItem>
          </ul>
        </li>
        <ListedItem
          Li_Class="menu-item"
          Link_Class="menu-link"
          Link_to="/about"
        >
          about us
        </ListedItem>
        <li className="menu-item has-sub-menu">
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
            to="/services"
          >
            services<i className="fas fa-plus plus-icon"> </i>
          </NavLink>
          <ul className="sub-menu">
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/services"
            >
              services
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/services-single"
            >
              service single
            </ListedItem>
          </ul>
        </li>
        <li className="menu-item has-sub-menu">
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
            to="/portfolio-grid"
          >
            portfolio <i className="fas fa-plus plus-icon"> </i>
          </NavLink>
          <ul className="sub-menu">
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/portfolio-grid"
            >
              portfolio grid
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/portfolio-blocks"
            >
              portfolio blocks
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/portfolio-Slider"
            >
              portfolio Slider
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/portfolio-single"
            >
              portfolio single
            </ListedItem>
          </ul>
        </li>
        <li className="menu-item has-sub-menu">
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
            to="/blog-page1"
          >
            blog<i className="fas fa-plus plus-icon"> </i>
          </NavLink>
          <ul className="sub-menu">
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/blog-page1"
            >
              blog home 1 colmun
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/blog-page2"
            >
              blog home 2 colmun
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/blog-page3"
            >
              blog home 3 colmun
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/single-post"
            >
              single post
            </ListedItem>
          </ul>
        </li>
        <li className="menu-item has-sub-menu">
          <NavLink
            className={({ isActive }) =>
              isActive ? "menu-link active" : "menu-link"
            }
            to="/pricing-plans"
          >
            pages<i className="fas fa-plus plus-icon"> </i>
          </NavLink>
          <ul className="sub-menu">
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/pricing-plans"
            >
              pricing plans
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/team"
            >
              our team
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/team-member"
            >
              team member
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/faq"
            >
              FAQ
            </ListedItem>
            <ListedItem
              Li_Class="menu-item sub-menu-item"
              Link_Class="menu-link sub-menu-link"
              Link_to="/404"
            >
              404 page
            </ListedItem>
          </ul>
        </li>
        <ListedItem
          Li_Class="menu-item"
          Link_Class="menu-link"
          Link_to="/contact"
        >
          contact us
        </ListedItem>
      </ul>
    </>
  );
};

export default NavLists;
