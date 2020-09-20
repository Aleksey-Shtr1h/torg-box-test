const deg = 6;

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const getTranslateTime = (timeZone) => {
  const date = new Date();
  date.setHours(date.getUTCHours() + timeZone);
  return date;
}

export const timeArrow = {
  getHour: (timeZone) => {
    const dateZone = getTranslateTime(timeZone);
    return dateZone.getHours() * 30;
  },

  getMinute: (timeZone) => {
    const dateZone = getTranslateTime(timeZone);
    return dateZone.getMinutes() * deg;
  },

  getSecond: (timeZone) => {
    const dateZone = getTranslateTime(timeZone);
    return dateZone.getSeconds() * deg;
  },
};

export const timeDigital = {
  getHour: (timeZone) => {
    const dateZone = getTranslateTime(timeZone);
    return castTimeFormat(dateZone.getHours());
  },

  getMinute: (timeZone) => {
    const dateZone = getTranslateTime(timeZone);
    return castTimeFormat(dateZone.getMinutes());
  },

  getSecond: (timeZone) => {
    const dateZone = getTranslateTime(timeZone);
    return castTimeFormat(dateZone.getSeconds());
  },
};