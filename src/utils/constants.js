const SHORTMOVIES_DURATION = 40;
const BREAKPOINTS = {
  tablet: 535,
  desktop: 870,
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
  SHORTMOVIES_DURATION,
  BREAKPOINTS,
  POPUP_MESSAGES,
};