/**
 * Map results
 * @param  {Number} distance Distance in mega lights (MGLT)
 * @param  {Object} parsers Property parsers
 * @param {Object} stopsCalculation Calculation functions
 * @return {Function}     Mapping function
 */
const stopsCalculationMapper = (distance, parsers, stopsCalculation) => (data) => data.map((p) => {
  const stops = stopsCalculation(
    distance,
    parsers.parseConsumables(p.consumables),
    parsers.parseMGLT(p.MGLT),
  );
  return `${p.name}: ${stops}`;
});

export default stopsCalculationMapper;
