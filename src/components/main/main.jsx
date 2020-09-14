import React from 'react';
import {ClockCool} from '../clock-cool/clock-cool.jsx';
import {ClockDigital} from '../clock-digital/clock-digital.jsx'
import {FormSelectTime} from '../form-select-time/form-select-time.jsx';

export const Main = () => {
  return (
    <main>
      <ClockCool />
      <ClockDigital />
      <FormSelectTime />
    </main>
  )
};