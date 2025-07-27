import { Medals } from "@/types";

export async function fetchMedals(): Promise<Medals[]> {
  const res = await fetch ('/api/medals');

  if (!res.ok) {
    throw new Error('Failed to fetch medals');
  }

  return res.json();
}