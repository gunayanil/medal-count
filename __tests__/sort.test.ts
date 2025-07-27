import { sortMedals } from '../src/utils/sort';
import { Medals } from '@/types';

const countries: Medals[] = [
  { code: 'A', gold: 3, silver: 2, bronze: 1 },
  { code: 'B', gold: 3, silver: 1, bronze: 0 },
  { code: 'C', gold: 2, silver: 4, bronze: 2 },
];

describe('sortMedals', () => {
  it('sorts by total with gold tiebreaker', () => {
    const result = sortMedals(countries, 'total');
    expect(result.map(c => c.code)).toEqual(['C', 'A', 'B']);
  });

  it('sorts by gold with silver tiebreaker', () => {
    const result = sortMedals(countries, 'gold');
    expect(result.map(c => c.code)).toEqual(['A', 'B', 'C']);
  });
});
