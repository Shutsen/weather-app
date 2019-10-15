import moment from 'moment-timezone';

/**
 * 
 * @param { Number } timestamp - unix timestamp in seconds
 * @param { String } timezone - timezone of the place e.g.: "America/Yellowknife"
 * @param { String } [format] - the format you want to output the date string into
 * @returns { String } timestamp - converted to a date. e.g: "Sun Oct 13th 2019" or any other format you give as the 2nd argument
 */
export const toDateString = (timestamp, timezone, format = 'ddd MMM Do YYYY') => {
  let date = getMoment(timestamp, timezone);
  return date.format(format);
}

/**
 * 
 * @param { Number } timestamp - unix timestamp in seconds
 * @param { String } timezone - timezone of the place e.g.: "America/Yellowknife"
 * @param { Number } offset - negative or positive integer, indicication the amount of hours behind or in front of your local time
 * @returns { String } timestamp converted to military time. e.g. "09:08"
 */
export const toMilitaryTime = (timestamp, timezone) => {
  const date = getMoment(timestamp, timezone);
  const hours = date.format('HH');
  const minutes = date.format('mm');
  return `${hours}:${minutes}`;
}

/**
 * 
 * @param { Number } timestamp - unix timestamp in seconds
 * @param { String } timezone - timezone of the place e.g.: "America/Yellowknife"
 * @returns { Boolean } - true for daytime, false for nighttime
 */
export const isDayTime = (timestamp, timezone) => {
  const date = getMoment(timestamp, timezone);
  let hours = date.format('HH');
  if (hours >= 22 || hours < 7) {
    return false;
  }
  return true;
}

/**
 * 
 * @param { Number } timestamp - unix timestamp in seconds
 * @param { String } timezone - timezone of the place e.g.: "America/Yellowknife"
 * @returns Date object based on the given timestamp
 */
const getMoment = (timestamp, timezone) => {
  // convert seconds to milliseconds
  const milliseconds = timestamp * 1000;
  let date = moment(milliseconds);
  date.tz(timezone);
  return date;
}
