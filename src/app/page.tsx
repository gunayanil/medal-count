'use client';

import { useState, useEffect } from 'react';
import { fetchMedals } from '@/services/medalsService';
import { Medals } from '@/types';
import Flag from '@/components/Flag';

export default function Home() {
  const [medals, setMedals] = useState<Medals[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMedals()
      .then(setMedals)
      .catch(() => setError('Failed to load medals'));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (medals.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Medal Count</h1>
      <ul>
        {medals.map((country) => (
          <li key={country.code}>
            {country.code} gold: {country.gold}, silver: {country.silver}, bronze: {country.bronze}
          </li>
        ))}
      </ul>
      <Flag code="CAN" />
    </div>
  );
}
