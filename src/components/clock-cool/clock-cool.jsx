import React from 'react';

import {timeArrow} from '@src/utils-js/utils.js';

export const ClockCool = ({date, timeZone}) => {

  const hour = timeArrow.getHour(timeZone, date);
  const minute = timeArrow.getMinute(timeZone, date);
  const second = timeArrow.getSecond(timeZone, date);

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