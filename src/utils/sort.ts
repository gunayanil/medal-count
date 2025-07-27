import { Medals, Sort } from '../types';

export function sortMedals(data: Medals[], sortBy: Sort = 'gold') {
  return [...data].sort((a, b) => {
    const getTotal = (x: Medals) => x.gold + x.silver + x.bronze;

    const getPrimary = (x: Medals) => {
      switch (sortBy) {
        case 'gold':
          return x.gold;
        case 'silver':
          return x.silver;
        case 'bronze':
          return x.bronze;
        case 'total':
          return getTotal(x);
      }
    };

    let diff = getPrimary(b) - getPrimary(a);

    // tiebreak
    if (diff === 0) {
      if (sortBy === 'total') {
        diff = b.gold - a.gold;
      } else if (sortBy === 'gold') {
        diff = b.silver - a.silver;
      } else { // silver and bronze
        diff = b.gold - a.gold;
      }
    }

    return diff;
  });
}
