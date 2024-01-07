import React, {useState, useEffect} from "react";
import './Clock.css';
import HourSpindle from "../spindle/HourSpindle";
import MinuteSpindle from "../spindle/MinuteSpindle";
import SecondSpindle from "../spindle/SecondSpindle";
import Time from "../../classes/Time";



export default function Clock() {
    const [time, setTime] = useState(() => ({
        second: 0,
        minute: 0,
        hour: 12
    }));


    useEffect(() => {
            let time = new Time().getTime();
            setTime(time);
            let second = time.second; 
            let minute = time.minute;
            let hour = time.hour;

            function incrementSecond() {
                if (second >= 59) {
                    incrementMinute();
                    second = 0;
                }
                else
                    second++;
                setTime({second, minute, hour});
            }

            function incrementMinute() {
                if (minute >= 59) {
                    incrementHour();
                    minute = 0;
                }
                else
                    minute++;
                setTime({second, minute, hour});
            }

            function incrementHour() {
                if (hour >= 12)
                    hour = 1;
                else
                    hour++;
                setTime({second, minute, hour});
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
            <HourSpindle hour={time.hour}/>
            <MinuteSpindle minute={time.minute}/>
            <SecondSpindle second={time.second}/>
        </div>
    );
}   