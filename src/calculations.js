/**
 * Calculates the total amount of stops required to make the distance between the planets.
 * @param  {Number} distance Distance in mega lights (MGLT)
 * @param  {Number} consumables The maximum length of time that this starship can provide consumables for its entire crew without having to resupply in standard hours.
 * @param  {Number} mglt The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
 * @return {Number}     The total amount of stops required to make the distance
 */
const stopsCalculation = (distance, consumables, mglt) => Math.floor(distance / (mglt * consumables));
// TODO should be used Math.ceil because if there is some decimal places it means ship is out of consumables. Used Math.floor to keep consistency with a task specification

export default stopsCalculation;
