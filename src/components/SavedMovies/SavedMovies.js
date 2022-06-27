import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState } from 'react';
import { useEffect } from 'react';

function SavedMovies() {
  const userContext = useContext(CurrentUserContext);
  const savedMovies = userContext.savedMovies;
  const [movies, setMovies] = useState([]);

  const movieCards = movies.map((movie) => {
    return <MoviesCard
      key={movie.movieId}
      id={movie.movieId}
      movieData={movie}
      image={movie.image}
      nameRU={movie.nameRU}
      duration={movie.duration}
    />
  });

  useEffect(() => {
    setMovies(savedMovies);
  }, [savedMovies])

  return (
    <div className='saved-movies'>
      <div className='saved-movies__wrapper'>
        <MoviesCardList>
          {movieCards}
        </MoviesCardList>
      </div>
    </div>
  );
}

export default SavedMovies;