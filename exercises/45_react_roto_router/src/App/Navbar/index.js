import React from "react";
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
        </div>
    )
}

export default Navbar;