import React from "react";

function Content(props) {
    return (
        <div style={props.parentStyle}>
            {props.text.map((text) => {
                return <p style={props.childStyle}>{text.title}{text.subtitle}{text.info}</p>;
            })}
        </div>
    
        
    )
}

export default Content;