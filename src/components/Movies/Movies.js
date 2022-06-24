import './Movies.css';
import * as MoviesApi from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../Buttons/MoreButton/MoreButton';
import { useState } from 'react';
import { useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);


  function getMovies() {
    MoviesApi.getMovies()
      .then((movies) => {
        setMovies(movies);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className='movies'>
      <div className='movies__wrapper'>
        <MoviesCardList>
          {movies.slice(0, 12).map(
            (film) => (
              <MoviesCard
                key={film.id}
                movieData={film}
              />
            ),
          )}
        </MoviesCardList>
        <MoreButton />
      </div>
    </div>
  )
}

export default Movies;