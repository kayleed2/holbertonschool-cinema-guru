import React from 'react';
import './general.css';

const Button = ({ label, className, onClick}) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;
