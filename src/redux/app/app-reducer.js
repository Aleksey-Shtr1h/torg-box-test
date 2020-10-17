import {ActionTypeApp} from './app-action.js';

export const initialState = {
  timeZoneClockOne: 7,
  timeZoneClockTwo: 7,
  cityNameActive: `Красноярск`,
};

export const appReducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypeApp.CHANGE_TIME_CLOCK_ONE:
      return {
        ...state, 
        cityNameActive: action.payload.name,
        timeZoneClockOne: action.payload.timeUTC,
      };
    case ActionTypeApp.CHANGE_TIME_CLOCK_TWO:
      return {
        ...state, 
        cityNameActive: action.payload.name,
        timeZoneClockTwo: action.payload.timeUTC,
      };

  }

  return state;
};
