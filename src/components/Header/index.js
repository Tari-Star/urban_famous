import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/About";

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Navigation />
                </header>

                <div className="content">
                <About />
                </div>
            </HashRouter>
        )
    }
}




export default Header;