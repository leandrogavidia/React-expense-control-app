import React from "react";
import "./AppRemoveList.css"

function AppRemoveList(props) {

    const onCancel = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <div className="AppRemoveList" > 
            <p className="AppRemoveList_title" >Are you sure you want to delete the entire list? You can't get it back!</p>
            <button className="AppRemoveList_cancel" onClick={onCancel} >Cancel</button>
            <button className="AppRemoveList_confirm">Confirm</button>
        </div>
    );
};

export { AppRemoveList };