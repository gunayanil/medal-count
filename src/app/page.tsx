'use client';

import { useState, useEffect } from 'react';
import { fetchMedals } from '@/services/medalsService';
import { Medals } from '@/types';
import Flag from '@/components/Flag';
import Table from '@/components/Table';

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
      <Table data={medals} />
    </div>
  );
}
