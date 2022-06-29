const BASE_URL = 'https://api.xcqmovies.nomoredomains.xyz';
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const IMAGES_URL = 'https://api.nomoreparties.co/';
const SHORTMOVIES_DURATION = 40;
const BREAKPOINTS = {
  mobile: {
    width: 320,
    cards: {
      total: 5,
      more: 2,
    }
  },
  tablet: {
    width: 535,
    cards: {
      total: 8,
      more: 2,
    },
  },
  desktop: {
    width: 870,
    cards: {
      total: 12,
      more: 3,
    },
  },
};
const POPUP_MESSAGES = {
  movies: {
    error: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
  },
  savedMovies: {
    error: 'Во время загрузки сохранённых фильмов произошла ошибка. Подождите немного и попробуйте обновить страницу.'
  }
}

export {
  BASE_URL,
  MOVIES_URL,
  IMAGES_URL,
  SHORTMOVIES_DURATION,
  BREAKPOINTS,
  POPUP_MESSAGES,
};