import {CityTimeOptions} from '../../constans.js';

const getCityTime = (city) => {
  return CityTimeOptions.find((cityTimeOption) => cityTimeOption.name === city);
};

export const ActionTypeApp = {
  CHANGE_CITY_TIME: `CHANGE_CITY_TIME`,
  CHANGE_TIME: `CHANGE_TIME`,
};

export const ActionCreatorApp = {
  actionChangeTime: (city) => {
    return {
      type: ActionTypeApp.CHANGE_TIME,
      payload: getCityTime(city),
    };
  },
};
