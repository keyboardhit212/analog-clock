import React from "react";
import './HourSpindle.css';

function hoursToDegrees(hour) {
    switch(hour) {
        case 12:
        case 24:
            return 270;
        case 1:
        case 13:
            return 300;
        case 2:
        case 14:
            return 330;
        case 3:
        case 15:
            return 0;
        case 4:
        case 16:
            return 30;
        case 5:
        case 17:
            return 60;
        case 6:
        case 18:
            return 90;
        case 7:
        case 19:
            return 120;
        case 8:
        case 20:
            return 150;
        case 9:
        case 21:
            return 180;
        case 10:
        case 22:
            return 210;
        case 11:
        case 23:
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