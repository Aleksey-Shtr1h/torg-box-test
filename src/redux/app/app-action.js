import {CityTimeOptions} from '../../constans.js';

const getCityTime = (city) => {
  return CityTimeOptions.find((cityTimeOption) => cityTimeOption.name === city);
};

export const ActionTypeApp = {
  CHANGE_CITY_TIME: `CHANGE_CITY_TIME`,
  CHANGE_TIME_CLOCK_ONE: `CHANGE_TIME_CLOCK_ONE`,
  CHANGE_TIME_CLOCK_TWO: `CHANGE_TIME_CLOCK_TWO`,
};

export const ActionCreatorApp = {
  actionChangeTimeClockOne: (city) => {
    return {
      type: ActionTypeApp.CHANGE_TIME_CLOCK_ONE,
      payload: getCityTime(city),
    };
  },

  actionChangeTimeClockTwo: (city) => {
    return {
      type: ActionTypeApp.CHANGE_TIME_CLOCK_TWO,
      payload: getCityTime(city),
    };
  },
};
