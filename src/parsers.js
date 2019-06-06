/**
 * Parse MGLT string
 * @param  {String} mglt The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
 * @return {Number}     Result in MGLT
 */
const parseMGLT = (mglt) => parseInt(mglt, 10);


const timeConversionTable = {
  hours: 1,
  days: 24,
  weeks: 168,
  months: 720,
  years: 8760,
};

/**
 * Private function; finds coefficient for conversion in timeConversionTable
 * @param  {String} unit Time unit
 * @return {Number}     Amount of days in one unit
 */
const findCoefficient = (unit) => {
  let coefficient = timeConversionTable[unit];
  if (coefficient) return coefficient;
  coefficient = timeConversionTable[`${unit}s`];
  return coefficient;
};

/**
 * Parse consumables
 * @param  {String} consumables The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
 * @return {Number}     Result in years
 */
const parseConsumables = (consumables) => {
  const [value, unit] = consumables.split(' ');
  const coefficient = findCoefficient(unit);
  return coefficient ? coefficient * value : NaN;
};

const parsers = { parseMGLT, parseConsumables };

export default parsers;
