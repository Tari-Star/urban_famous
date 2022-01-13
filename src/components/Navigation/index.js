import React from "react";
import { Navbar } from "react-bootstrap";

function Navigation(props) {
  return (
    <div>
    <Navbar  className ="flex-row" expand="lg" sticky="top">
     
        <h4 class="nav-title-font">
          <a class="text-dark" href="/">Bota Seri</a>
        </h4>
     
      <nav>
      <ul class="flex-row navitem-indent">
        <li class="mx-2 nav-item">
            <a class="nav-font text-dark" href = "/about">About</a>
        </li>

        <li class="mx-2 nav-item">
            <a class="nav-font text-dark" href = "/portfolio">Portfolio</a>
        </li>
        <li class="mx-2 nav-item">
            <a class="nav-font text-dark" href = "/contact">Contact</a>
        </li>

        <li class="mx-2 nav-item">
            <a class="nav-font text-dark" href = "/resume">Resume</a>
        </li>

      </ul>
      </nav>
    </Navbar>
    </div>
  );
}

export default Navigation;
