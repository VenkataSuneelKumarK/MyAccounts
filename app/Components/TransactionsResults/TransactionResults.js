/**
 * Created by kanamars on 26/10/19.
 */
import React from 'react';
import TransactionHeading from './TransactionHeading/TransactionHeading';
import Transaction from './Transaction/Transaction';
import { withRouter } from "react-router";

function transactionResults(props) {

    const onClickHandler = (event) =>{
        let target = event.target.getAttribute("id");
        if(target){
            props.history.push('/transdetails');
        }
    };
    return(
        <div>
           <TransactionHeading labels={props.transactionsLabels}/>
            {props.transactions ? props.transactions.map( (trans, index) => {
               return (<Transaction details={trans} key={"trans"+index} onclick={onClickHandler.bind(this)}/>)
            }) : "No transaction available"}
        </div>
    )
}

export default withRouter(transactionResults);