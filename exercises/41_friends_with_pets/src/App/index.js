import React from "react";
import FriendList from "./FriendList";
import "./index.css";

function App(props) {
    return (
        <div className="app-wrapper">
            <h1>Friends with Pets</h1>
            <FriendList></FriendList>
        </div>
    );
}

export default App;
