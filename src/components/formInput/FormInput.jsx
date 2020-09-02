import React from 'react'
import './FormInput.scss';

export default function FormInput({onChange, label, ...otherProps}) {
    return (
        <div className="group">
            <input className="form-input" onChange={onChange} {...otherProps}></input>
            { // if their is a label to the input add the class of shrink 
                label ? 
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} > 
                    {label}
                </label>) 
                : null
            }
        </div>
    )
}
