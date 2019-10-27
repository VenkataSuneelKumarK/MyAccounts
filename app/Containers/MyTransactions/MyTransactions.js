/**
 * Created by kanamars on 21/10/19.
 */
import React from 'react';
import Filters from '../../Components/Filters/Filters';
import TransactionResults from '../../Components/TransactionsResults/TransactionResults';
import './MyTransactions.css';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/Actions/ActionTypes';
import {getTransactions} from '../../Store/Actions/MiddleWare/transactionMiddleware';

class MyTransactions extends React.Component{
    componentDidMount(){
        this.props.getTransactionLabels();
        this.props.getTransaction();
    };
    render(){
        return(
            <>
                <div className="heading">
                    My Transactions
                </div>
                <div className="transactionResults">
                    <Filters filters={this.props.filters}/>
                    <TransactionResults transactionsLabels={this.props.transactionsLabels} transactions={this.props.transactions}/>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        transactionsLabels :state.transaction.transactionLabels,
        transactions: state.transaction.transactions,
        filters: state.transaction.filters
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        getTransactionLabels: () => dispatch({type : actionTypes.GET_TRANSACTION_LABELS}),
        getTransaction: () => dispatch(getTransactions())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MyTransactions);