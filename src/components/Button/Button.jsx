import React from 'react';
import './Button.css';


export default function Button({ variant = 'primary', children, className = '', ...props }) {
    const vClass = variant === 'secondary' ? 'btn-secondary' : 'btn-primary';
    return (
        <button className={`btn ${vClass} ${className}`.trim()} {...props}>
            {children}
        </button>
    );
}