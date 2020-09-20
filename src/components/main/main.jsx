import React from 'react';
import {ClockCool} from '@components/clock-cool/clock-cool.jsx';
import {ClockDigital} from '@components/clock-digital/clock-digital.jsx'
import {FormSelectTime} from '@components/form-select-time/form-select-time.jsx';

export const Main = () => {
  return (
    <main>
      <ClockCool />
      <ClockDigital />
      <FormSelectTime />
    </main>
  )
};