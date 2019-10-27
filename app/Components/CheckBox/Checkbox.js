/**
 * Created by kanamars on 27/10/19.
 */
import React from 'react';

const checkBox = props =>{
    return (
        <div>
            <input  id={props.value.id} type="checkbox" checked={props.value.isChecked} />
            <label htmlFor={props.value.id}>{props.value.label}</label>
        </div>
    )
};

export default checkBox;

// onChange={props.handleChange}