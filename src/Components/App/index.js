import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../../CustomReactHooks/useLocalStorage";
import { useCounterValue } from "../../CustomReactHooks/useCounterValue";

function App() {

    const {
        item: positiveListValue,
        saveItem: setPositiveListValue,
        loading: positiveLoading,
        error: positiveError,
    } = useLocalStorage("POSITIVE_APP_V1", []);

    const {
        item: negativeListValue,
        saveItem: setNegativeListValue,
        loading: negativeLoading,
        error: negativeError,
    } = useLocalStorage("NEGATIVE_APP_V1", []);

    const [positiveCounterValue, setPositiveCounterValue] = useCounterValue(positiveListValue, positiveListValue);
    const [negativeCounterValue, setNegativeCounterValue] = useCounterValue(negativeListValue, negativeListValue);

    const [totalBalance, setTotalBalance] = React.useState(0);

    React.useEffect(() => {
        setTotalBalance(positiveCounterValue - negativeCounterValue)
    }, [positiveCounterValue, negativeCounterValue])

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

    console.log(positiveListValue)
    console.log(positiveCounterValue)
    console.log(negativeCounterValue)

    return(
        <AppUI
            positiveLoading={positiveLoading}
            negativeLoading={negativeLoading}
            positiveError={positiveError}
            negativeError={negativeError}
            totalBalance={totalBalance}
            positiveCounterValue={positiveCounterValue}
            negativeCounterValue={negativeCounterValue}
            negativeListValue={negativeListValue}
            positiveListValue={positiveListValue}
            setPositiveListValue={setPositiveCounterValue}
            addPositivePayment={addPositivePayment}
            addNegativePayment={addNegativePayment}
        />
    );
};

export { App };