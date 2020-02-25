import { IMovieDbResponse } from '../../types/app';

const mockResponse = require('../../__mockData__/themoviedb.mock.json');

const configs: any = {};
const fetchMock = jest.fn().mockImplementation(
  () =>
    new Promise((resolve, reject) => {
      if (configs.reject) {
        reject();
      } else {
        resolve({ json: () => Promise.resolve(configs.data) });
      }
    })
);

(fetchMock as any).given = {
  resolveWith: (data: Partial<IMovieDbResponse> = mockResponse) => (configs.data = data),
  rejectWith: () => (configs.reject = true),
};

export default fetchMock;
