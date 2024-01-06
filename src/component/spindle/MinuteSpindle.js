import React from 'react';
import './MinuteSpindle.css';

export default function MinuteSpindle({minute}) {
    return (
        <div className="minute-spindle" style={{transform: `rotate(${(270 + (minute * 6))}deg)`}}></div>
    );
}