/**
 * Parse MGLT string
 * @param  {String} mglt The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
 * @return {Number}     Result in MGLT
 */
const parseMGLT = (mglt) => {

};

/**
 * Parse consumables
 * @param  {String} consumables The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
 * @return {Number}     Result in years
 */
const parseConsumables = (consumables) => {

};

const parsers = { parseMGLT, parseConsumables };

export default parsers;
