import React from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//navigation with titles, conditionally render the different sections of portfolio
function Navigation() {
  return (
    <div>
      <Navbar className="flex-row" expand="lg" sticky="top">
        <NavLink activeClassName="navbar__link--active" to="/">
          <div class="text-dark">
            <h4 class="nav-title-font">Bota Seri</h4>
          </div>
        </NavLink>

        <ul class="flex-row navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font text-dark">About</div>
            </NavLink>
          </li>

          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font text-dark">Portfolio</div>
            </NavLink>
          </li>

          <li class="mx-2 nav-item">
            <NavLink to="/contact">
              <div class="nav-font text-dark">Contact</div>
            </NavLink>
          </li>

          <li class="mx-2 nav-item">
            <NavLink to="/resume">
              <div class="nav-font text-dark">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;
