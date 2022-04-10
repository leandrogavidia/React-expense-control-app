import React from "react";
import "./AppList.css";

function AppList(props) {
    return(
        <ol className="App__list" >
            {props.children}
        </ol>
    );
};

export {AppList};