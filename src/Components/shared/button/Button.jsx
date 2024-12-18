import React from 'react';
import s from './Button.module.scss';

function Button({text, customStyle = false, additionalClass = false, Myfunction = () => {}}) {
    return (
        <button
            className={additionalClass ? `${s.btn} ${s[additionalClass]}` : `${s.btn}`}
            style={customStyle ? customStyle : {}}
            onClick={Myfunction}
        >
            {text}
        </button>
    );
}

export default Button;