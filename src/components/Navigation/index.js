import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//navigation with titles, conditionally render the different sections of portfolio
function Navigation() {
  return (
    <div>
      <Navbar className="flex-row" expand="lg" sticky="top">
        <NavLink   to="/">
          <div class="text-dark">
            <h4 className="nav-title-font">Bota Seri</h4>
          </div>
        </NavLink>

        <ul class="flex-row navbar-nav">
          <li className="mx-2">
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/about"
            >
              <div>About</div>
            </NavLink>
          </li>

          <li className="mx-2">
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/portfolio"
            >
              <div>Portfolio</div>
            </NavLink>
          </li>

          <li className="mx-2">
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/contact"
            >
              <div>Contact</div>
            </NavLink>
          </li>

          <li className="mx-2">
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
