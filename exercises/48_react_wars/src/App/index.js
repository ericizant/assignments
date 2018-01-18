import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Character from "./Character";
import "./index.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <h1 className="title">REACT WARS</h1>
            <div className="main-wrapper">
                <Sidebar />
                <Switch>
                    <Route path="/characters/:id" component={Character}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default App;
