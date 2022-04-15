import React from "react";

function useCounterValue(newValue, condicion) {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        let counterValue;
    
        if (newValue.length === 0) {
            counterValue = 0
        } else {
            counterValue = newValue.reduce((a, b) => a + b);
        }
        setValue(counterValue)
    }, [condicion])

    return [value, setValue];
}

export { useCounterValue };