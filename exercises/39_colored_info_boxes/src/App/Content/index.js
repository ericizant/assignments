import React, { Component } from "react";

function Content(props) {
    return (
        <div style={props.parentStyle}>
            {props.text.map((text) => {
                return <p style={props.childStyle}>{text.title}{text.subtitle}{text.info}</p>;
                return <h1 className={props.title}></h1>;
            })}
        </div>
    
        
    )
}

export default Content;