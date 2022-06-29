import { IMAGES_URL, SHORTMOVIES_DURATION } from './constants';

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

export function transformMovies(movies) {
  const changedMovies = [];

  movies.map((movie) => {
    const newMovie = {
      country: movie.country || 'unknown',
      director: movie.director || 'unknown',
      duration: movie.duration || 60,
      year: movie.year || 2000,
      description: movie.description || 'unknown',
      image: `${IMAGES_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${IMAGES_URL}${movie.image.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU || 'unknown',
      nameEN: movie.nameEN || 'unknown',
    };
    changedMovies.push(newMovie)
  })

  return changedMovies;
}