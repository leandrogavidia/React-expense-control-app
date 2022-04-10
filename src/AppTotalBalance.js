import React from "react";
import "./AppTotalBalance.css";

function AppTotalBalance({totalValue, setTotalValue}) {

    return(
        <h1 
            className="App__total-balance"
            onClick={() => setTotalValue("100")}
            value={totalValue}
            >
                Your total balance is: {totalValue}
        </h1>
    );
};

export { AppTotalBalance };