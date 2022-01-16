import React from "react";

//used older version of 'react-router-dom' to use Switch and Redirect
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"; 

import Navigation from "../../components/Navigation";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";
import Resume from "../../components/Resume";

//component that appears on multiple pages
function Header() {
  return (
    <HashRouter>
      <header>
        <Navigation />
      </header>
      <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </HashRouter>
  );
}

export default Header;
