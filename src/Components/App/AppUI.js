import React from "react";
import { AppContext } from "../AppContext";
import { AppAdd } from "../AppAdd";
import { AppCounter } from "../AppCounter";
import { AppList } from "../AppList";
import { AppTotalBalance } from "../AppTotalBalance";
import { PositiveModal } from "../Modals/PositiveModal";
import { NegativeModal } from "../Modals/NegativeModal";
import { AppRemoveList } from "../AppRemoveList";

function AppUI() {
    const {
        positiveError,
        positiveLoading,
        positiveListValue,
        positiveCounterValue,
        addPositivePayment,
        negativeCounterValue,
        negativeError,
        negativeLoading,
        negativeListValue,
        addNegativePayment,
        positiveOpenModal,
        setPositiveOpenModal,
        negativeOpenModal,
        setNegativeOpenModal,
        setPositiveListValue,
        setNegativeListValue,
    } = React.useContext(AppContext);
    

    return (
    <React.Fragment>
        <AppTotalBalance />
        
        <AppCounter 
            counterValue={positiveCounterValue}
            type="Positive"
            column="left"
        />

        <AppAdd column="left" setOpenModal={setPositiveOpenModal} onAdd={() => addPositivePayment(parseFloat(document.getElementsByClassName("App__value")[0].value))} />
        

        <AppList column="left" >
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
        <AppAdd column="right" setOpenModal={setNegativeOpenModal} onAdd={() => addNegativePayment(parseFloat(document.getElementsByClassName("App__value")[1].value))} />
        <AppList column="right" >
            {negativeError && <p>`${negativeError}`</p>}
            {(!negativeLoading && !negativeListValue.length) && <p>You do not have any negative payment. Create some</p>}

            {negativeListValue.map((item, index) => {
               return <li key={index}><span>{item}$</span> | Nº{index + 1} - {new Date().toLocaleDateString()}</li>
            })}
        </AppList>

        {!!positiveOpenModal && (
            <PositiveModal>
                <AppRemoveList setOpenModal={setPositiveOpenModal} setListValue={ setPositiveListValue } />
            </PositiveModal>
        )}

        {!!negativeOpenModal && (
            <NegativeModal>
                <AppRemoveList setOpenModal={setNegativeOpenModal} setListValue={ setNegativeListValue } />
            </NegativeModal>
        )}

    </React.Fragment>
    );
};

export { AppUI};