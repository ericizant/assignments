import React from "react";
import Header from "/Header.css";

function Header({brand, slogan}) {
    return (
        <div className="header">
            <h1>{Brand}</h1>
            <h2>{Slogan}</h2>
        </div>
    )
}

export default Header;