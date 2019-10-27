/**
 * Created by kanamars on 27/10/19.
 */
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
  details: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TRANS_DETAILS :
            return state;
        case actionTypes.UPDATE_TRANS_DETAILS :
            return state;
        default:
            return state;
    }
    return state;
};