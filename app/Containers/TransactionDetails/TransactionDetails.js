/**
 * Created by kanamars on 26/10/19.
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/Actions/ActionTypes';
import './TransactionDetails.css';

class TransactionDetails extends React.Component{
    componentDidMount(){

    }
    render(){
        return(
            <>
            <div className="transactionDetailHeading">Transaction {this.props.details.account}</div>
            <div className="details">
                <div>Account No: {this.props.details.account}</div>
                <div>Account Name: {this.props.details.accountName}</div>
                <div>Currency Code: {this.props.details.currencyCode}</div>
                <div>Amount: {this.props.details.amount}</div>
                <div>Transaction Type: {this.props.details.transactionType}</div>
            </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        details: state.transactionDetails.details
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        getDetails : () => dispatch({type : actionTypes.GET_TRANS_DETAILS})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TransactionDetails);