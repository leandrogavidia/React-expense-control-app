import React from "react";
import "./AppAdd.css"

function AppAdd(props) {

    return(
        <div className="App__add">
            <input type="number" placeholder="Enter a value" className="App__value"/>
            <button type="button" onClick={props.onAdd} >Add</button>
        </div>
    );
};

export { AppAdd }