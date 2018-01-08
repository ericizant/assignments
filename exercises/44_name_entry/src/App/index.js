import React, { Component } from "react";
import Nav from "./Nav";
import Div from "./Div";
import Gallery from "./Gallery";

function App(props) {
    let links = [{
        href: "/home",
        name: "Home"
    }, {
        href: "/about",
        name: "About"
    }, {
        href: "/contact",
        name: "Contact"
    }];
    return (
        <div>
            <Nav
                links={links}
                parentStyle={{ backgroundColor: "maroon", height: "350px" }}
                childStyle={{ color: "white" }}>
            </Nav>
            <Nav
                links={links}
                parentStyle={{ backgroundColor: "blue", height: "350px" }}
                childStyle={{ color: "white" }}>
            </Nav>
            {}
        </div>
    )
}

export default App;