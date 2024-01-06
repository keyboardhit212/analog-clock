import React from "react";
import './SecondSpindle.css';

export default function SecondSpindle({second}) {
    return (
        <div className="second-spindle" style={{transform: `rotate(${(270 + (second * 6))}deg)`}}></div>
    );
}