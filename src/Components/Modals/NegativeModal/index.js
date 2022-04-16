import React from "react";
import ReactDOM from "react-dom";

function NegativeModal(props) {
    return ReactDOM.createPortal(
        <div className="ModalBackground negative-moda">
            {props.children}
        </div>,
        document.getElementById("negative-modal")
    );
};

export { NegativeModal }