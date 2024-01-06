import React from "react";
import './HourSpindle.css';

function hoursToDegrees(hour) {
    switch(hour) {
        case 12:
            return 270;
        case 1:
            return 300;
        case 2:
            return 330;
        case 3:
            return 0;
        case 4:
            return 30;
        case 5:
            return 60;
        case 6:
            return 90;
        case 7:
            return 120;
        case 8:
            return 150;
        case 9:
            return 180;
        case 10:
            return 210;
        case 11:
            return 240;
        default:
            return 270;
    }
}

export default function HourSpindle({hour}) {
    return (
        <div className="hour-spindle" style={{transform: `rotate(${hoursToDegrees(Number(hour))}deg)`}}></div>
    );
}