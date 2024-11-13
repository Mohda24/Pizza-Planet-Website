import React from 'react';
import s from './Button.module.scss';

function Button({text, customStyle = false}) {
    return (
        <button
        className={customStyle ? `${s.btnBase}` : `${s.btnBase} ${s.btn}`}
        style={customStyle ? customStyle :{}}
        >
            {text}
        </button>
    )
}

export default Button