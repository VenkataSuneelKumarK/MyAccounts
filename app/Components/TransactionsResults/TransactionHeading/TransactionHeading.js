/**
 * Created by kanamars on 26/10/19.
 */
import React from 'react';
import './TransactionHeading.css';
function TransactionHeading(props) {
    return(
        <div className="transactionHeading">
            {props.labels ? props.labels.map(trans => <div className="label" key={trans.label}>{trans.label}</div>): "Labels are not available"}
        </div>
    )
}

export default TransactionHeading;