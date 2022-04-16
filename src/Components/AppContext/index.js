import React, { useState } from "react";
import { useLocalStorage } from "../../CustomReactHooks/useLocalStorage";
import { useCounterValue } from "../../CustomReactHooks/useCounterValue";

const AppContext = React.createContext();

function AppProvider(props) {

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

    const [positiveOpenModal, setPositiveOpenModal] = useState(false);
    const [negativeOpenModal, setNegativeOpenModal] = useState(false);

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

    return (
        <AppContext.Provider value={{
            positiveLoading,
            negativeLoading,
            positiveError,
            negativeError,
            totalBalance,
            positiveCounterValue,
            negativeCounterValue,
            negativeListValue,
            positiveListValue,
            setPositiveListValue,
            addPositivePayment,
            addNegativePayment,
            positiveOpenModal,
            setPositiveOpenModal,
            negativeOpenModal,
            setNegativeOpenModal,
            setNegativeListValue,
        }}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider }