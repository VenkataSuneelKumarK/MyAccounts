/**
 * Created by kanamars on 26/10/19.
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/Actions/ActionTypes';

class TransactionDetails extends React.Component{
    render(){
        return(
            <>
                Transaction Details
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