import React from "react";
import Content from "./Content";

function App(props) {
    let text = [{
        title: "Title: "
    }, {
        subtitle: "Subtitle: "
    }, {
        info: "Info: "
    }];
    return (
        <div>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "red", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}
                title={{title: "Eric"}}>
            </Content>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "orange", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}>
            </Content>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "yellow", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}>
            </Content>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "green", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}>
            </Content>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "blue", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}>
            </Content>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "indigo", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}>
            </Content>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "violet", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}>
            </Content>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "brown", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}>
            </Content>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "black", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}>
            </Content>
            <Content
                text={text}
                parentStyle={{ backgroundColor: "grey", height: "100px", padding: "20px" }}
                childStyle={{ color: "white", margin: "5px" }}>
            </Content>
        </div>
    )
}

export default App;