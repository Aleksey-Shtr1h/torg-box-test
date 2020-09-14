import {ActionTypeApp} from './app-action.js';

export const initialState = {
  timeZone: 7,
  cityNameActive: `Красноярск`,
};

export const appReducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypeApp.CHANGE_TIME:
      return Object.assign({}, state, {
        cityNameActive: action.payload.name,
        timeZone: action.payload.timeUTC,
      });

  }

  return state;
};
