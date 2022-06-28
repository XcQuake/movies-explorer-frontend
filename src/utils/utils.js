import { SHORTMOVIES_DURATION } from './constants';

export function filterMovies(movies, keyWord, isShortMovies) {
  const word = keyWord.toLowerCase().trim();
  const searchedMovies = movies.filter((movie) => {
    const ruName = movie.nameRU && movie.nameRU.toLowerCase().trim();
    const enName = movie.nameEN && movie.nameEN.toLowerCase().trim();
    return (ruName.match(word)) || (enName && enName.match(word));
  });

  if (isShortMovies) {
    return searchedMovies.filter((movie) => movie.duration < SHORTMOVIES_DURATION);
  } else {
    return searchedMovies
  };
};