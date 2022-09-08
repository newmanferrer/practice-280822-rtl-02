import { randomBetween } from '..';

// jest.spyOn(Math, 'random').mockReturnValue(0.5);
const randomSpy = jest.spyOn(Math, 'random');

describe('Test randomBetween function', () => {
  describe('Test when Math.random() returns 0', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0);
    });

    it('test #1: should called with min = 3 and max = 5, return 3', () => {
      expect(randomBetween(3, 5)).toBe(3);
      expect(randomSpy).toHaveBeenCalledTimes(1);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });

  describe('Test when Math.random() returns 0.5', () => {
    beforeEach(() => {
      // randomSpy.mockClear().mockReturnValue(0.5);
      randomSpy.mockClear().mockImplementation(() => 0.5);
    });

    it('test #2: should called with min = 3 and max = 5, return 4', () => {
      expect(randomBetween(3, 5)).toBe(4);
      expect(randomSpy).toHaveBeenCalledTimes(1);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });

  describe('Test when Math.random() returns 0.999999', () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(1);
    });

    it('test #3: should called with min = 3 and max = 5, return 5', () => {
      expect(randomBetween(3, 5)).toBe(5);
      expect(randomSpy).toHaveBeenCalledTimes(1);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
});
