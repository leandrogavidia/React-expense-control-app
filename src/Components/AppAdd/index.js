import React from "react";
import "./AppAdd.css";

function AppAdd(props) {

    return(
        <React.Fragment>
            <div className={`App__add App__add--${props.column}`}>
                <input type="number" placeholder="Enter a value" className="App__value"/>
                <button type="button" onClick={props.onAdd} >Add</button>
            </div>
            <span className={`App__alert App__alert--${props.column}`}>Please, enter a valur greater than 0.</span>
        </React.Fragment>
    );
};

export { AppAdd }