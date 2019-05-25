import { expect } from 'chai';
import parsers from '../src/parsers';

const { parseMGLT, parseConsumables } = parsers;


describe('parsers test', () => {
  describe('parseMGLT function', () => {
    it('convert "80" to 80',
      () => {
        const result = parseMGLT('80');
        expect(result).to.equal(80);
      });
    it('convert "1" to 1',
      () => {
        const result = parseMGLT('1');
        expect(result).to.equal(1);
      });
    it('convert "150" to 150',
      () => {
        const result = parseMGLT('150');
        expect(result).to.equal(150);
      });
    it('convert "unknown" to NaN',
      () => {
        const result = parseMGLT('unknown');
        // eslint-disable-next-line no-unused-expressions
        expect(result).to.be.NaN;
      });
  });
  describe('parseConsumables function', () => {
    it('convert "1 hour" to 1',
      () => {
        const result = parseConsumables('1 hour');
        expect(result).to.equal(1);
      });
    it('convert "2 hours" to 2',
      () => {
        const result = parseConsumables('2 hours');
        expect(result).to.equal(2);
      });
    it('convert "1 day" to 24',
      () => {
        const result = parseConsumables('1 day');
        expect(result).to.equal(24);
      });
    it('convert "2 days" to 48',
      () => {
        const result = parseConsumables('2 days');
        expect(result).to.equal(48);
      });
    it('convert "1 week" to 168',
      () => {
        const result = parseConsumables('1 week');
        expect(result).to.equal(168);
      });
    it('convert "2 weeks" to 336',
      () => {
        const result = parseConsumables('2 weeks');
        expect(result).to.equal(336);
      });
    it('convert "1 month" to 720',
      () => {
        const result = parseConsumables('1 month');
        expect(result).to.equal(720);
      });
    it('convert "2 months" to 1440',
      () => {
        const result = parseConsumables('2 months');
        expect(result).to.equal(1440);
      });
    it('convert "1 year" to 8760',
      () => {
        const result = parseConsumables('1 year');
        expect(result).to.equal(8760);
      });
    it('convert "2 years" to 17520',
      () => {
        const result = parseConsumables('2 years');
        expect(result).to.equal(17520);
      });
    it('convert "unknown" to NaN',
      () => {
        const result = parseConsumables('unknown');
        // eslint-disable-next-line no-unused-expressions
        expect(result).to.be.NaN;
      });
  });
});
