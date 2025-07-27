'use client';

import { useState, useEffect } from 'react';
import { fetchMedals } from '@/services/medalsService';
import { Medals, Sort } from '@/types';
import Table from '@/components/Table';
import { useSearchParams } from 'next/navigation';
import { sortMedals } from '@/utils/sort';

export default function Home() {
  const [medals, setMedals] = useState<Medals[]>([]);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const sortParam = searchParams.get('sort') as Sort | null;
  const sortBy: Sort = sortParam ?? 'gold';

  useEffect(() => {
    fetchMedals()
      .then(setMedals)
      .catch(() => setError('Failed to load medals'));
  }, []);

  const sortedMedals = sortMedals(medals, sortBy);

  if (error) {
    return <p>{error}</p>;
  }

  if (medals.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Medal Count</h1>
      <Table data={sortedMedals} />
    </div>
  );
}
