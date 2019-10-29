/**
 * Created by kanamars on 26/10/19.
 */
import React from 'react';
import TransactionHeading from './TransactionHeading/TransactionHeading';
import Transaction from './Transaction/Transaction';
import { withRouter } from "react-router";
import {connect} from 'react-redux';
import {updateTransactionDetail} from '../../Store/Actions/MiddleWare/transDetailMW';

function transactionResults(props) {

    const onClickHandler = (event) =>{
        let target = event.target.getAttribute("id");
        let account = event.target.innerHTML;
        if(target){
            console.log("account", account);
            props.updateTransDetails(account, props.history);
            // props.history.push('/transdetails');
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
const mapDispatchToProps = dispatch =>{
  return {
      updateTransDetails: (account, history) => dispatch(updateTransactionDetail('account=' +account, history))
  }
};
export default withRouter(connect(null, mapDispatchToProps)(transactionResults));