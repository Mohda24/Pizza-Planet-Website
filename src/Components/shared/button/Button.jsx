import React from 'react';
import s from './Button.module.scss';

function Button({text, customStyle = false,additionalClass=false}) {
    return (
        <button
        className={additionalClass ? `${s.btn} ${s[additionalClass]}` : `${s.btn}`}
        style={customStyle ? customStyle :{}}
        >
            {text}
        </button>
    )
}

export default Button