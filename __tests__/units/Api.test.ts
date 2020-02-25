// @ts-ignore
import dotEnv from 'dotenv';
// @ts-ignore
import unfetch from 'unfetch';
import { fetchData } from '../../src/api';

dotEnv.config();

describe('Api', () => {
  it('should add api token to url', async () => {
    unfetch.given.resolveWith();

    await fetchData();

    expect(unfetch).toHaveBeenCalledWith(expect.stringContaining(`api_key=${process.env.API_KEY}`));
  });

  it('should return a formatted list', async () => {
    unfetch.given.resolveWith();

    const list = await fetchData();
    expect(Array.isArray(list)).toBe(true);
    expect(list).toHaveLength(1);
  });
});
