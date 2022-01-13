import React, { Component } from "react";
import { Route, Navigate, HashRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <header>
                    <Navigation />
                </header>
            </HashRouter>
        )
    }
}

export default Header;