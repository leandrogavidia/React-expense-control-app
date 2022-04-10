import React from "react";
import "./AppAdd.css"

function AppAdd() {
    const Add = () => {
        alert("Something will happen here")
    };

    const EnterValue = () => {
        alert("The user will enter the value here");
    };

    return(
        <div className="App__add">
            <input type="number" onChange={EnterValue} placeholder="Enter a value"/>
            <button type="button" onClick={Add} >Add</button>
        </div>
    );
};

export { AppAdd }