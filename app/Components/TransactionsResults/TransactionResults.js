/**
 * Created by kanamars on 26/10/19.
 */
import React from 'react';
import TransactionHeading from './TransactionHeading/TransactionHeading';
import Transaction from './Transaction/Transaction';


function transactionResults(props) {
    return(
        <div>
           <TransactionHeading labels={props.transactionsLabels}/>
            {props.transactions ? props.transactions.map( (trans, index) => {
               return (<Transaction details={trans} key={"trans"+index}/>)
            }) : "No transaction available"}
        </div>
    )
}

export default transactionResults;