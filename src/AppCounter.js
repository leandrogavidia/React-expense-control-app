import React from "react";
import "./AppCounter.css";

function AppCounter({counterValue, setCounterValue}) {

    return(
        <h2
        className="App__counter"
        value={counterValue}
        onClick={() => setCounterValue("100")}
            >
                Balance: {counterValue}
            </h2>
    );
};

export { AppCounter };