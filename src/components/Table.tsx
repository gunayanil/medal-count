'use client';

import Flag from './Flag';
import { Medals } from '@/types';
import styles from './Table.module.css';

export default function Table({ data }: { data: Medals[] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Country</th>
          <th>Gold</th>
          <th>Silver</th>
          <th>Bronze</th>
          <th>Total</th>
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
