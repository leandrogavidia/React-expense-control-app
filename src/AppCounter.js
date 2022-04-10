import React from "react";
import "./AppCounter.css";

function AppCounter({counterValue}) {

    return(
        <h2
        className="App__counter"
        value={counterValue}
            >
                Balance: {counterValue}
            </h2>
    );
};

export { AppCounter };