import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {timeDigital} from '../../utils/utils.js';
import {timeInterval} from '../../constans.js';

import '../../styles/clock-digital.css';

export const ClockDigital  = () => {
  const timeZone = useSelector((state) => state.APP.timeZone);

  const [hour, setHour] = useState(timeDigital.getHour(timeZone));
  const [minute, setMinute] = useState(timeDigital.getMinute(timeZone));
  const [second, setSecond] = useState(timeDigital.getSecond(timeZone));

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(timeDigital.getHour(timeZone));
      setMinute(timeDigital.getMinute(timeZone));
      setSecond(timeDigital.getSecond(timeZone));

    }, timeInterval);

    return () => clearInterval(interval);

  }, [timeZone]);

  return (
    <section className="digital-time">
      <time className="digital-time__value">{hour} : {minute} : {second}</time>
    </section>
  )
};