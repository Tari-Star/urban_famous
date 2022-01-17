import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//navigation with titles, conditionally render the different sections of portfolio
function Navigation() {
  return (
    <div>
      <Navbar className="flex-row" sticky="top">
        <NavLink className="nav-title-font" to="/">
          <div>Bota Seri</div>
        </NavLink>

        <ul className="flex-row navbar-nav">
          <li className="mx">
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/about"
            >
            <div>About me</div> 
            </NavLink>
          </li>

          <li className="mx">
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/portfolio"
            >
              <div>Portfolio</div>
            </NavLink>
          </li>

          <li className="mx">
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/contact"
            >
              <div>Contact</div>
            </NavLink>
          </li>

          <li className="mx">
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/resume"
            >
              <div>Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;
