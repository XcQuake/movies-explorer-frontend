const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

async function processResult(res) {
  const result = await res.json();
  return res.ok ? result : Promise.reject(result.message);
};

export const getAllMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET'
  })
  .then((res) => processResult(res))
}