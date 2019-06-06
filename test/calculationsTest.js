import { expect } from 'chai';
import stopsCalculation from '../src/calculations';

const distance = 1000000;


describe('calculations test', () => {
  describe('calculateStops function', () => {
    it(`on distance ${distance} MGLT should return 
    74 stops for consumables: 168 hours (1 week) and MGLT: 80 (Y-wing)`,
    () => {
      const result = stopsCalculation(distance, 168, 80);
      expect(result).to.equal(74);
    });
    it(`on distance ${distance} MGLT should return 
    9 stops for consumables: 1440 hours (2 months) and MGLT: 75 (Millennium Falcon)`,
    () => {
      const result = stopsCalculation(distance, 1440, 75);
      expect(result).to.equal(9);
    });
    it(`on distance ${distance} MGLT should return 
    11 stops for consumables: 4320 hours (6 months) and MGLT: 20 (Rebel Transport)`,
    () => {
      const result = stopsCalculation(distance, 4320, 20);
      expect(result).to.equal(11);
    });
  });
});
