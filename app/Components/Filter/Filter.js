/**
 * Created by kanamars on 27/10/19.
 */
import React from 'react';
import CheckBox from '../CheckBox/Checkbox';
import './Filter.css';

const filter = props =>{
    return (
        <div className="filter">
            {props.filter.label}
            <div>
                {props.filter.values.map( (value, index) => <CheckBox value={value} key={value.id + index}/>)}
            </div>
        </div>
    )
};

export default filter;