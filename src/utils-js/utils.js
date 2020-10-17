const deg = 6;

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const getTranslateTime = (timeZone, dateNow) => {
  const date = new Date(dateNow.valueOf());
  date.setHours(date.getUTCHours() + timeZone);
  return date;
}

export const timeArrow = {
  getHour: (timeZone, date) => {
    const dateZone = getTranslateTime(timeZone, date);
    return dateZone.getHours() * 30;
  },

  getMinute: (timeZone, date) => {
    const dateZone = getTranslateTime(timeZone, date);
    return dateZone.getMinutes() * deg;
  },

  getSecond: (timeZone, date) => {
    const dateZone = getTranslateTime(timeZone, date);
    return dateZone.getSeconds() * deg;
  },
};

export const timeDigital = {
  getHour: (timeZone, date) => {
    const dateZone = getTranslateTime(timeZone, date);
    return castTimeFormat(dateZone.getHours());
  },

  getMinute: (timeZone, date) => {
    const dateZone = getTranslateTime(timeZone, date);
    return castTimeFormat(dateZone.getMinutes());
  },

  getSecond: (timeZone, date) => {
    const dateZone = getTranslateTime(timeZone, date);
    return castTimeFormat(dateZone.getSeconds());
  },
};