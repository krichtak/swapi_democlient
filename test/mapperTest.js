import { expect } from 'chai';
import stopsCalculationMapper from '../src/mapper';

describe('mapper test', () => {
  describe('stopsCalculationMapper function', () => {
    it('should return function',
      () => {
        const mapper = stopsCalculationMapper(0, {}, {});
        expect(mapper).to.be.a('function');
      });
    it('should call inner function and return result',
      () => {
        const expectedResult = ['A: 3'];
        const mockData = [{ name: 'A' }];
        const mockCalculation = () => 3;
        const mockParser = () => {};
        const mockParsers = { parseConsumables: mockParser, parseMGLT: mockParser };
        const mapper = stopsCalculationMapper(0, mockParsers, mockCalculation);
        const result = mapper(mockData);

        expect(result)
          .to.be.an('array')
          .and.to.eql(expectedResult);
      });
  });
});
