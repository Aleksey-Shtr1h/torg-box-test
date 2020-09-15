import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {timeArrow} from '../../utils/utils.js';
import {timeInterval} from '../../constans.js';

import '../../styles/clock-cool.css';

export const ClockCool = () => {
  const timeZone = useSelector((state) => state.APP.timeZone);

  const [hour, setHour] = useState(timeArrow.getHour(timeZone));
  const [minute, setMinute] = useState(timeArrow.getMinute());
  const [second, setSecond] = useState(timeArrow.getSecond());

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(timeArrow.getHour(timeZone));
      setMinute(timeArrow.getMinute(timeZone));
      setSecond(timeArrow.getSecond(timeZone));

    }, timeInterval);

    return () => clearInterval(interval);

  }, [timeZone]);

  return (

      <section className="clock">

        <span className="clock__stroke clock__stroke--0"></span>
        <span className="clock__stroke clock__stroke--5"></span>
        <span className="clock__stroke clock__stroke--10"></span>
        <span className="clock__stroke clock__stroke--15"></span>
        <span className="clock__stroke clock__stroke--20"></span>
        <span className="clock__stroke clock__stroke--25"></span>
        <span className="clock__stroke clock__stroke--30"></span>
        <span className="clock__stroke clock__stroke--35"></span>
        <span className="clock__stroke clock__stroke--40"></span>
        <span className="clock__stroke clock__stroke--45"></span>
        <span className="clock__stroke clock__stroke--50"></span>
        <span className="clock__stroke clock__stroke--55"></span>

        <div className="hour">
          <div 
            className="hr"
            style={{transform: `rotateZ(${(hour) + (minute/12)}deg)`}} 
          />
        </div>

        <div className="min">
          <div 
            className="mn"
            style={{transform: `rotateZ(${minute}deg)`}} 
          />
        </div>

        <div className="sec">
          <div 
            className="sc"
            style={{transform: `rotateZ(${second}deg)`}} 
          />
        </div>
        
      </section>

  )
};