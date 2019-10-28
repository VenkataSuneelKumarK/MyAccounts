/**
 * Created by kanamars on 26/10/19.
 */
import React from 'react';
import  './Transaction.css'

function Transaction(props) {
    return (
        <div className="transactionWrapper">
            <div className="values" id="account" onClick={props.onclick}>{props.details.account}</div>
            <div className="values">{props.details.accountName}</div>
            <div className="values">{props.details.currencyCode}</div>
            <div className="values">{props.details.amount}</div>
            <div className="values">{props.details.transactionType}</div>
        </div>
    )
};

export default Transaction;