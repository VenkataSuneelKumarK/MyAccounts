/**
 * Created by kanamars on 28/10/19.
 */
import axios from '../../../axios';
import * as actionTypes from '../ActionTypes';

export const updateTransactionDetail = (data, history) => {
    return dispatch => {
        axios.get( 'getTransaction?'+data )
            .then( response => {
                dispatch(updateTransactionDetails(response.data));
                history.push('/transdetails')
            } )
            .catch( error => {

            } );
    };
};

const updateTransactionDetails = (data) => {
    return {
        type: actionTypes.UPDATE_TRANS_DETAILS,
        transaction: data
    };
};