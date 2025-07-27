'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Flag from './Flag';
import { Medals, Sort } from '@/types';
import styles from './Table.module.css';

const headers: { key: Sort; label: string }[] = [
  { key: 'gold', label: 'Gold' },
  { key: 'silver', label: 'Silver' },
  { key: 'bronze', label: 'Bronze' },
  { key: 'total', label: 'Total' },
];

export default function Table({ data }: { data: Medals[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortType = searchParams.get('sort') ?? 'gold';

  const handleSort = (key: Sort) => {
    router.push(`?sort=${key}`);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {/* Todo: Make it screen-reader only header */}
          <th>Country</th>
          {headers.map(({ key, label }) => (
            <th
              key={key}
              onClick={() => handleSort(key)}
              className={key === sortType ? styles.active : ''}
            >
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((country, index) => {
          const total = country.gold + country.silver + country.bronze;
          return (
            <tr key={country.code}>
              <td>
                {index + 1} <Flag code={country.code} /> {country.code}
              </td>
              <td>{country.gold}</td>
              <td>{country.silver}</td>
              <td>{country.bronze}</td>
              <td>{total}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
