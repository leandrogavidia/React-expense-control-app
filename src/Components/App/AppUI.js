import React from "react";
import { AppAdd } from "../AppAdd";
import { AppCounter } from "../AppCounter";
import { AppList } from "../AppList";
import { AppTotalBalance } from "../AppTotalBalance";

function AppUI({
    positiveLoading,
    negativeLoading,
    positiveError,
    negativeError,
    totalBalance,
    positiveCounterValue,
    negativeCounterValue,
    negativeListValue,
    positiveListValue,
    setPositiveCounterValue,
    addPositivePayment,
    addNegativePayment,
}) {
    return (
        <React.Fragment>
        <AppTotalBalance 
            totalBalance={totalBalance}
        />
        
        <AppCounter 
            counterValue={positiveCounterValue}
            type="Positive"
            column="left"
        />

        <AppAdd column="left" onAdd={() => addPositivePayment(parseFloat(document.getElementsByClassName("App__value")[0].value))} />
        
        <AppList column="left" setPositiveCounterValue={setPositiveCounterValue} >
            {positiveError && <p>`${positiveError}`</p>}
            {positiveLoading && <p>Loading your payments...</p>}
            {(!positiveLoading && !positiveListValue.length) && <p>You do not have any positive payment. Create some</p>}

            {positiveListValue.map((item, index) => {
               return <li key={index}><span>{item}$</span> | Nº{index + 1} - {new Date().toLocaleDateString()}</li>
            })}
        </AppList>

        <AppCounter
            counterValue={negativeCounterValue}
            type="Negative"
            column="right"
        />
        <AppAdd column="right" onAdd={() => addNegativePayment(parseFloat(document.getElementsByClassName("App__value")[1].value))} />
        <AppList column="right" >
            {negativeError && <p>`${negativeError}`</p>}
            {(!negativeLoading && !negativeListValue.length) && <p>You do not have any negative payment. Create some</p>}

            {negativeListValue.map((item, index) => {
               return <li key={index}><span>{item}$</span> | Nº{index + 1} - {new Date().toLocaleDateString()}</li>
            })}
        </AppList>
    </React.Fragment>
    );
};

export { AppUI};