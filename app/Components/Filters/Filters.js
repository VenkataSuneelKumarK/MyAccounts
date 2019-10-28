/**
 * Created by kanamars on 26/10/19.
 */
import React from 'react';
import {connect} from 'react-redux';

import {updateFilterWithTransactions} from '../../Store/Actions/MiddleWare/transactionMiddleware';

import Filter from '../Filter/Filter';
import './Filters.css';
function filters(props) {
    const onChangeHandler = (event) => {
        props.updateFilters(event.target.getAttribute("id"));
    };
    return(
        <div className="filters">Filters
            {props.filters.map(filter => <Filter filter={filter} key={filter.key} onchange={onChangeHandler} filterKey={filter.key}/>
                )}
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        updateFilters: (filter) => dispatch(updateFilterWithTransactions(filter))
    }
};

export default connect(null, mapDispatchToProps)(filters);