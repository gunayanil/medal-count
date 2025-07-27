export async function fetchMedals(): Promise<any> {
  const res = await fetch ('/api/medals');

  if (!res.ok) {
    throw new Error('Failed to fetch medals');
  }

  return res.json();
}