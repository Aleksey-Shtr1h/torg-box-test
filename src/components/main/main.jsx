import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ClockCool} from '@components/clock-cool/clock-cool.jsx';
import {ClockDigital} from '@components/clock-digital/clock-digital.jsx'
import {FormSelectTime} from '@components/form-select-time/form-select-time.jsx';

import {ActionCreatorApp} from '@src/redux/app/app-action.js';

import {timeInterval} from '@src/constans.js';

export const Main = () => {
  const [date, setDate] = useState(new Date);
  const timeZoneClockOne = useSelector((state) => state.APP.timeZoneClockOne);
  const timeZoneClockTwo = useSelector((state) => state.APP.timeZoneClockTwo);

  const dispatch = useDispatch();

  const onTimeZoneClockOneClick = (cityName) => dispatch(ActionCreatorApp.actionChangeTimeClockOne(cityName));

  const onTimeZoneClockTwoClick = (cityName) => dispatch(ActionCreatorApp.actionChangeTimeClockTwo(cityName));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date);
    }, timeInterval);

    return () => clearInterval(interval);

  }, [date]);

  return (
    <main>
      <div className="conatiner-clock">
        <ClockCool date={date} timeZone={timeZoneClockOne}/>
        <ClockDigital date={date} timeZone={timeZoneClockOne}/>
        <FormSelectTime onTimeZoneClockClick={onTimeZoneClockOneClick}/>
      </div>

      <div  className="conatiner-clock">
        <ClockCool date={date} timeZone={timeZoneClockTwo}/>
        <ClockDigital date={date} timeZone={timeZoneClockTwo}/>
        <FormSelectTime onTimeZoneClockClick={onTimeZoneClockTwoClick}/>
      </div>

    </main>
  )
};