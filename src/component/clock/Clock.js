import React, {useState, useEffect} from "react";
import './Clock.css';
import HourSpindle from "../spindle/HourSpindle";
import MinuteSpindle from "../spindle/MinuteSpindle";
import SecondSpindle from "../spindle/SecondSpindle";



export default function Clock() {
    const SECOND = 0, MINUTE = 0, HOUR = 12;
    const [second, setSecond] = useState(() => SECOND);
    const [minute, setMinute] = useState(() => MINUTE);
    const [hour, setHour] = useState(() => HOUR);

    useEffect(() => {
            let second = SECOND;
            let minute = MINUTE;
            let hour = HOUR;

            function incrementSecond() {
                if (second >= 59) {
                    incrementMinute();
                    second = 0;
                }
                else
                    second++;
                setSecond(second);
            }

            function incrementMinute() {
                if (minute >= 59) {
                    incrementHour();
                    minute = 0;
                }
                else
                    minute++;
                setMinute(minute);
            }

            function incrementHour() {
                if (hour >= 12)
                    hour = 1;
                else
                    hour++;
                setHour(hour);
            }

            function tick() {
                incrementSecond();
            }

        const interval = setInterval(() => {
            tick();
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    

    return (
        <div className="clock">
            <div className="h-guideline"></div>
            <div className="v-guideline"></div>
            <div className="d1-guideline"></div>
            <div className="d2-guideline"></div>
            <span className="twelve">12</span>
            <span className="one">1</span>
            <span className="two">2</span>
            <span className="three">3</span>
            <span className="four">4</span>
            <span className="five">5</span>
            <span className="six">6</span>
            <span className="seven">7</span>
            <span className="eight">8</span>
            <span className="nine">9</span>
            <span className="ten">10</span>
            <span className="eleven">11</span>
            <HourSpindle hour={hour}/>
            <MinuteSpindle minute={minute}/>
            <SecondSpindle second={second}/>
        </div>
    );
}   