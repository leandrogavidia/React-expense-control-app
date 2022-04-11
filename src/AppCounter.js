import React from "react";
import "./AppCounter.css";

function AppCounter({counterValue, type, column}) {

    return(
        <h2
        className={`App__counter App__counter--${column}`}
        value={counterValue}
            >
                {type} Balance: <span>{counterValue}$</span>
            </h2>
    );
};

export { AppCounter };