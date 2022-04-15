import React from "react";
import { useLocalStorage } from "../../CustomReactHooks/useLocalStorage";
import { useCounterValue } from "../../CustomReactHooks/useCounterValue";

const AppContext = React.createContext();

function AppProvider(props) {
    return (
        <AppContext.Provider value={{

        }}>
            {props.children}
        </AppContext.Provider>
    );
};

<AppContext.Consumer></AppContext.Consumer>

export { AppContext, AppProvider }