const BASE_URL = 'https://api.xcqmovies.nomoredomains.xyz';

async function processResult(res) {
  const result = await res.json();
  return res.ok ? result : Promise.reject(result.message);
};

export const signUp = (username, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify ({
      "name": username,
      "email": email,
      "password": password,
    }),
  })
    .then((res) =>processResult(res))
};

export const signIn = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify ({
      "email": email,
      "password": password,
    })
  })
  .then((res) => processResult(res))
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    credentials: 'include',
    method: 'GET'
  })
  .then((res) => processResult(res))
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then((res) => processResult(res))
};


export const updateProfile = (username, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    credentials: 'include',
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify ({
      "name": username,
      "email": email,
    })
  })
  .then((res) => processResult(res))
}