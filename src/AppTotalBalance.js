import React from "react";
import "./AppTotalBalance.css";

function AppTotalBalance({totalBalance}) {

    return(
        <React.Fragment>
            <h1 
            className="App__total-balance"
            value={totalBalance}
            >
                Your total balance is:
            </h1>

            <span className="App__total-balance-result">{totalBalance}$</span>

            <span className="App__tip">{totalBalance < 0 && "Oh no. You are in negative numbers! 😭. Save a little more."} {totalBalance > 0 && "😀 You are in positive numbers. Do not stop!."}</span>

        </React.Fragment>
    );
};

export { AppTotalBalance };