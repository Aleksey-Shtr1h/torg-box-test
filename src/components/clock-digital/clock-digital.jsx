import React from 'react';

import {timeDigital} from '@src/utils-js/utils.js';

export const ClockDigital  = ({date, timeZone}) => {

  const hour = timeDigital.getHour(timeZone, date);
  const minute = timeDigital.getMinute(timeZone, date);
  const second = timeDigital.getSecond(timeZone, date);

  return (
    <section className="digital-time">
      <time className="digital-time__value">{hour} : {minute} : {second}</time>
    </section>
  )
};