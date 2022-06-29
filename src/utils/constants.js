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
  },
  profile: {
    success: 'Данные аккаунта успешно изменены!',
  }
};

const CUSTOM_VALIDATION = {
  username: {
    pattern: '^[\\sa-zA-Zа-яА-ЯёЁ-]+$',
    message: 'Имя может содержать только латиницу, кириллицу, пробел или дефис',
  },
  email: {
    pattern: '^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$',
    message: 'Некорректный Email-адрес',
  },
};

const AUTHFORM_TEXTS = {
  signIn: {
    button: 'Войти',
    linkText: 'Ещё не зарегистрированы?',
    link: 'Регистрация',
  },
  signUp: {
    button: 'Зарегистрироваться',
    linkText: 'Уже зарегистрированы?',
    link: 'Войти',
  },
}

export {
  BASE_URL,
  MOVIES_URL,
  IMAGES_URL,
  SHORTMOVIES_DURATION,
  BREAKPOINTS,
  POPUP_MESSAGES,
  CUSTOM_VALIDATION,
  AUTHFORM_TEXTS,
};