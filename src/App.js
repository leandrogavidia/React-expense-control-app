import React from "react";
import { AppTotalBalance } from "./AppTotalBalance";
import { AppCounter } from "./AppCounter";
import { AppAdd } from "./AppAdd";
import { AppList } from "./AppList";


function App() {

    const positivePayments = [];
    const negativePayments = [];

    const [positiveCounterValue, setPositiveCounterValue] = React.useState(0);
    const [negativeCounterValue, setNegativeCounterValue] = React.useState(0);
    const [totalBalance, setTotalBalance] = React.useState(0);

    const [positiveListValue, setPositiveListValue] = React.useState(positivePayments);
    const [negativeListValue, setNegativeListValue] = React.useState(negativePayments);

    const addPositivePayment = (value) => {

        let newPositiveListValue = [...positiveListValue, value];
        setPositiveListValue(newPositiveListValue);
        console.log(newPositiveListValue);

        setPositiveCounterValue(newPositiveListValue.reduce((a, b) => a + b));
        let newTotalBalance = totalBalance;
        setTotalBalance(newTotalBalance += value);
    }

    const addNegativePayment = (value) => {
        
        let newNegativeListValue = [...negativeListValue, value];
        setNegativeListValue(newNegativeListValue);
        console.log(newNegativeListValue);

        setNegativeCounterValue(newNegativeListValue.reduce((a, b) => a + b));
        let newTotalBalance = totalBalance;
        setTotalBalance(newTotalBalance -= value);

    }


    return(
        <React.Fragment>
            <AppTotalBalance 
                totalBalance={totalBalance}
            />
            
            <AppCounter 
                counterValue={positiveCounterValue}
            />

            <AppAdd onAdd={() => addPositivePayment(parseInt(document.getElementsByClassName("App__value")[0].value))} />
            
            <AppList setPositiveCounterValue={setPositiveCounterValue} >
                {positiveListValue.map((item, index) => {
                   return <li key={index}> {item} </li>
                })}
            </AppList>

            <AppCounter
                counterValue={negativeCounterValue}
            />
            <AppAdd onAdd={() => addNegativePayment(parseInt(document.getElementsByClassName("App__value")[1].value))} />
            <AppList>
                {negativeListValue.map((item, index) => {
                   return <li key={index}> {item} </li>
                })}
            </AppList>
        </React.Fragment>
    );
};

export { App };