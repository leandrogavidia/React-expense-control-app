import React from "react";
import "./AppTotalBalance.css";

function AppTotalBalance({totalBalance}) {

    return(
        <h1 
            className="App__total-balance"
            value={totalBalance}
            >
                Your total balance is: {totalBalance}
        </h1>
    );
};

export { AppTotalBalance };