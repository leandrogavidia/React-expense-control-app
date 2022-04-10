import React from "react";
import "./AppCounter.css";

function AppCounter({counterValue, type}) {

    return(
        <h2
        className="App__counter"
        value={counterValue}
            >
                {type} Balance: <span>{counterValue}$</span>
            </h2>
    );
};

export { AppCounter };