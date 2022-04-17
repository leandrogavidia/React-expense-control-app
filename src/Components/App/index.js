import React from "react";
import { AppContext, AppProvider } from "../AppContext";
import { AppUI } from "./AppUI";


function App() {

    return(
        <AppProvider> 
            <AppUI />
        </AppProvider>
    );
    
};

export { App };