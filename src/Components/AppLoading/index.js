import React from "react";
import "./AppLoading.css";

function AppLoading() {
    return(
      <React.Fragment>
        <div className="AppLoading-item"></div>
        <div className="AppLoading-item AppLoading-item-M1"></div>
        <div className="AppLoading-item AppLoading-item-M2"></div>
      </React.Fragment>  
    );
};

export { AppLoading };