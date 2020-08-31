import React from 'react'
import './FormInput.scss';

export default function FormInput({handleChange, label, ...otherProps}) {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...otherProps}></input>
            { // selective label 
                label ? <label></label> : null
            }
        </div>
    )
}
