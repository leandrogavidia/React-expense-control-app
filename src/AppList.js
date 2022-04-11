import React from "react";
import "./AppList.css";

function AppList(props) {
    return(
        <ol className={`App__list App__list--${props.column}`}>
            {props.children}
        </ol>
    );
};

export {AppList};