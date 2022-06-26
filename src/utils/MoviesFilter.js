class MoviesFilter {
  constructor(shortFilmsDuration) {
    this._shortFilmsDuration = shortFilmsDuration;
    console.log('test')
  };

  filterByName(movies, keyWord) {
    if (!keyWord) return [];
    const keyW = keyWord.toLowerCase();
    const filteredMovies = [];

    movies.forEach((movie) => {
      const ruName = movie.nameRU && movie.nameRU.toLowerCase();
      const enName = movie.nameEN && movie.nameEN.toLowerCase();

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