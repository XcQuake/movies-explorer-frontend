import { MOVIES_URL } from './constants';

async function processResult(res) {
  const result = await res.json();
  return res.ok ? result : Promise.reject(result.message);
};

export const getAllMovies = () => {
  return fetch(`${MOVIES_URL}`, {
    method: 'GET'
  })
  .then((res) => processResult(res))
}