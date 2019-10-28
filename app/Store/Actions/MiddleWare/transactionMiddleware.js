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

const updateTransaction = (data) => {
  return {
        type: actionTypes.GET_TRANSACTIONS,
        transactions: data
    };
};