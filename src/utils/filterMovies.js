function filterMovies({movies, keyWord}) {
  const keyW = keyWord.toLowerCase();
  const filteredMovies = [];

  movies.forEach((movie) => {
    const ruName = movie.nameRU && movie.nameRU.toLowerCase();
    const enName = movie.nameEN && movie.nameEN.toLowerCase();

    if (
      (ruName && ruName.match(keyW)) || (enName && enName.match(keyW))
    ) {
      filteredMovies.push(movie);
    }
  })
  return filteredMovies;
};

export default filterMovies;