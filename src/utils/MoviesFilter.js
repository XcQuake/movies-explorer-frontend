class MoviesFilter {
  constructor(shortFilmsDuration) {
    this._shortFilmsDuration = shortFilmsDuration;
  };

  filterByName(movies, keyWord) {
    if (!keyWord) return [];
    const keyW = keyWord.toLowerCase().trim();
    const filteredMovies = [];

    movies.forEach((movie) => {
      const ruName = movie.nameRU && movie.nameRU.toLowerCase().trim();
      const enName = movie.nameEN && movie.nameEN.toLowerCase().trim();

      if ((ruName && ruName.match(keyW)) || (enName && enName.match(keyW))) {
        filteredMovies.push(movie);
      }
    });
    return filteredMovies;
  };

  filterByDuration(movies) {
    const filteredMovies = [];
    movies.forEach((movie) => {
      const movieDuration = movie.duration;
      if (movieDuration <= this._shortFilmsDuration) filteredMovies.push(movie);
    })
    return filteredMovies;
  };
}

export default MoviesFilter;