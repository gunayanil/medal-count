import { fetchMedals } from '@/services/medalsService';

describe('fetchMedals', () => {
  const data = [{ code: 'USA', gold: 10, silver: 5, bronze: 3 }];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('returns medal data when fetch is successful', async () => {
    const result = await fetchMedals();
    expect(result).toEqual(data);
  });

  it('throws an error when fetch fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

    await expect(fetchMedals()).rejects.toThrow('Failed to fetch medals');
  });
});
