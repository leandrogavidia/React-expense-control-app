import React from "react";
import ReactDOM from "react-dom";
import "../Modal.css";

function PositiveModal({ children }) {

    return ReactDOM.createPortal(
        <div className="ModalBackground positive-moda">
            {children}
        </div>,
        document.getElementById("positive-modal")
    );  
}

export { PositiveModal }