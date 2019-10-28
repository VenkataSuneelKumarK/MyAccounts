/**
 * Created by kanamars on 27/10/19.
 */
import axios from '../../../axios';
import * as actionTypes from '../ActionTypes';

export const getTransactions = () => {
    return dispatch => {
        axios.get( 'getTransaction' )
            .then( response => {
                dispatch(updateTransaction(response.data));
            } )
            .catch( error => {

            } );
    };
};

export const updateFilterWithTransactions = (filter) => {
    //Need to write code for the transactions based on the filters, so wrote code like this
  return dispatch => {
      dispatch({
          type: actionTypes.UPDATE_TRANS_DETAILS,
          filter: filter
      });
  }
};

const updateTransaction = (data) => {
  return {
        type: actionTypes.GET_TRANSACTIONS,
        transactions: data
    };
};