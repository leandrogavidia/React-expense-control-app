import React from "react";
import { AppTotalBalance } from "./AppTotalBalance";
import { AppCounter } from "./AppCounter";
import { AppAdd } from "./AppAdd";
import { AppList } from "./AppList";
// import { AppElement } from "./AppElement";

function App() {

    let positivePayments = [1000];
    let negativePayments = [250];

    // let positivePayments = [200, 530];
    // let negativePayments = [300, 100];

    // const [positivePays, setPositivePays] = React.useState(positivePayments);
    // const [negativePays, setNegativePays] = React.useState(negativePayments);

    // let totalNegativePayments = negativePays.reduce((a, b) => a + b);
    // let totalPositivePayments = positivePays.reduce((a, b) => a + b)

    // let totalBalance = totalPositivePayments - totalNegativePayments;

    const [totalValue, setTotalValue] = React.useState("0");
    const [counterValue, setCounterValue] = React.useState("0");


    return(
        <React.Fragment>
            <AppTotalBalance 
                totalValue={totalValue}
                setTotalValue={setTotalValue}
            />
            
            <AppCounter 
                counterValue={counterValue}
                setCounterValue={setCounterValue}
            />
            <AppAdd />
            <AppList >
                {positivePayments.map(item => {
                   return <li key={item}> {item} </li>
                })}
            </AppList>

            <AppCounter
                counterValue={counterValue}
                setCounterValue={setCounterValue}
            />
            <AppAdd />
            <AppList>
                {negativePayments.map(item => {
                   return <li key={item}> {item} </li>
                })}
            </AppList>
        </React.Fragment>
    );
};

export { App };