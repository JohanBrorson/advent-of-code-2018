const getClaimedArea = require('./helper').getClaimedArea;
const getNumberOfOverlappingClaims = require('./helper')
  .getNumberOfOverlappingClaims;
const getClaimWithNoOverlap = require('./helper').getClaimWithNoOverlap;

describe('Day 3', () => {
  const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];

  describe('Part 1', () => {
    test('gets the claimed area', () => {
      const claim = '#123 @ 3,2: 5x4';
      const expected = [
        { x: 4, y: 3 },
        { x: 5, y: 3 },
        { x: 6, y: 3 },
        { x: 7, y: 3 },
        { x: 8, y: 3 },
        { x: 4, y: 4 },
        { x: 5, y: 4 },
        { x: 6, y: 4 },
        { x: 7, y: 4 },
        { x: 8, y: 4 },
        { x: 4, y: 5 },
        { x: 5, y: 5 },
        { x: 6, y: 5 },
        { x: 7, y: 5 },
        { x: 8, y: 5 },
        { x: 4, y: 6 },
        { x: 5, y: 6 },
        { x: 6, y: 6 },
        { x: 7, y: 6 },
        { x: 8, y: 6 },
      ];
      expect(getClaimedArea(claim)).toEqual(expected);
    });

    test('gets number of overlapping claims', () => {
      expect(getNumberOfOverlappingClaims(input)).toEqual(4);
    });
  });

  describe('Part 2', () => {
    test('gets claim with no overlap', () => {
      expect(getClaimWithNoOverlap(input)).toEqual(3);
    });
  });
});
