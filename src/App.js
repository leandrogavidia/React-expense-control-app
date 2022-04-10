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

        let alerts = document.getElementsByClassName("App__alert");

        if (value > 0) {
            alerts[0].classList.remove("App__alert--active");
            let newPositiveListValue = [...positiveListValue, value];
            setPositiveListValue(newPositiveListValue);
    
            setPositiveCounterValue(newPositiveListValue.reduce((a, b) => a + b));
            let newTotalBalance = totalBalance;
            setTotalBalance(newTotalBalance += value);
        } else {
            alerts[0].classList.add("App__alert--active");
        }

    }

    const addNegativePayment = (value) => {

        let alerts = document.getElementsByClassName("App__alert");

        if(value > 0) {
            alerts[1].classList.remove("App__alert--active");
            
            let newNegativeListValue = [...negativeListValue, value];
            setNegativeListValue(newNegativeListValue);
    
            setNegativeCounterValue(newNegativeListValue.reduce((a, b) => a + b));
            let newTotalBalance = totalBalance;
            setTotalBalance(newTotalBalance -= value);
        } else {
            alerts[1].classList.add("App__alert--active");
        }
        
    }


    return(
        <React.Fragment>
            <AppTotalBalance 
                totalBalance={totalBalance}
            />
            
            <AppCounter 
                counterValue={positiveCounterValue}
                type="Positive"
            />

            <AppAdd onAdd={() => addPositivePayment(parseFloat(document.getElementsByClassName("App__value")[0].value))} />
            
            <AppList setPositiveCounterValue={setPositiveCounterValue} >
                {positiveListValue.map((item, index) => {
                   return <li key={index}><span>{item}$</span> | Nº{index + 1} - {new Date().toLocaleDateString()}</li>
                })}
            </AppList>

            <AppCounter
                counterValue={negativeCounterValue}
                type="Negative"
            />
            <AppAdd onAdd={() => addNegativePayment(parseFloat(document.getElementsByClassName("App__value")[1].value))} />
            <AppList>
                {negativeListValue.map((item, index) => {
                   return <li key={index}><span>{item}$</span> | Nº{index + 1} - {new Date().toLocaleDateString()}</li>
                })}
            </AppList>
        </React.Fragment>
    );
};

export { App };