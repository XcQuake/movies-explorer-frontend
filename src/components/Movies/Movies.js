import './Movies.css';
import * as MoviesApi from '../../utils/MoviesApi';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../Buttons/MoreButton/MoreButton';
import { useState, useEffect } from 'react';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoints = {
    tablet: 535,
    desktop: 870,
  };

  const handleResizeWindow = () => {
    setWidth(window.innerWidth)
  };

  useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')));

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // Подсчёт количества карточек в зависимости от ширины экрана
  const countMovieCards = () => {
    if(width < breakPoints.tablet) {
      return movies.slice(0, 5)
    };
    if(width < breakPoints.desktop) {
      return movies.slice(0, 8)
    };
    if(width >= breakPoints.desktop) {
      return movies.slice(0, 12)
    };
  }

  const movieCards = countMovieCards();

  return (
    <div className='movies'>
      <div className='movies__wrapper'>
        <MoviesCardList>
          {
            movieCards.map(
              (film) => (
                <MoviesCard
                  key={film.id}
                  movieData={film}
                />
              )
          )}
        </MoviesCardList>
        <MoreButton />
      </div>
    </div>
  )
}

export default Movies;