import React, { InputHTMLAttributes, useState } from 'react';

import './style.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;

}

const InputLogin: React.FC<InputProps> = ({ label, name, ...rest }) => {

    const [labelPosition, setLabelPosition] = useState(false);
    
    function changeLabel(){
        labelPosition === false ? setLabelPosition(true) : setLabelPosition(false);
                   
    };


    return (
        <div className="form">
            <input type="text" id={name}  {...rest} onClick={changeLabel}/>
            <label htmlFor={name} className="label-name">
                <span className={ labelPosition === true ? "content-name-off" : "content-name"}>{label}
                </span>
            </label>
        </div>
    )
}

export default InputLogin;