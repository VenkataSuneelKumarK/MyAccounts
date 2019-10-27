/**
 * Created by kanamars on 26/10/19.
 */
import React from 'react';
import Filter from '../Filter/Filter';
import './Filters.css';
function filters(props) {
    return(
        <div className="filters">Filters
            {props.filters.map(filter => <Filter filter={filter} key={filter.key}/>
                )}
        </div>
    )
}

export default filters;