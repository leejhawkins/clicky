import React from "react";
import "./style.css";

function Container(props) {
    return <main className={`container${props.fluid ? "-fluid" : ""}`}>
        <div className="row">
            {props.children}
            </div>
        </main>;
}

export default Container;