import './MoviesCardList.css';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { BREAKPOINTS } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../Buttons/MoreButton/MoreButton';

function MoviesCardList({movies}) {
  const [countOfCards, setCountOfCards] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMoreMovies, setIsMoreMovies] = useState(true);

  const currentLocation = useLocation().pathname;
  const userContext = useContext(CurrentUserContext);
  const savedMovies = userContext.savedMovies;

  const { mobile, tablet, desktop } = BREAKPOINTS;

  const handleResizeWindow = () => {
    setWidth(window.innerWidth)
  };

  // Добавляет слушатель изменения ширины экрана
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [])

  // Устанавливает количество карточек в зависимости от ширины экрана
  useEffect(() => {
    if (width < tablet.width) {
      return setCountOfCards(mobile.cards.total);
    };
    if (width >= tablet.width &&  width < desktop.width) {
      return setCountOfCards(tablet.cards.total);
    };
    if (width >= desktop.width) {
      return setCountOfCards(desktop.cards.total);
    };
  }, [width]);

  // Устанавливает состояние кнопки "Ещё"
  useEffect(() => {
    if (countOfCards >= movies.length) {
      setIsMoreMovies(false);
    } else {
      setIsMoreMovies(true);
    }
  }, [countOfCards, movies]);

  const handleMoreClick = () => {
    if (countOfCards < movies.length) {
      if (width < desktop.width) {
        return setCountOfCards(countOfCards + tablet.cards.more);
      };
      if (width >= desktop.width) {
        return setCountOfCards(countOfCards + desktop.cards.more);
      };
    } else {
      setIsMoreMovies(false);
    }
  };

  const checkIsSaved = (movie) => {
    const savedMovie = savedMovies.find(item => item.movieId === movie.movieId);
    return savedMovie
      ? { isSaved: true, id: savedMovie._id }
      : { isSaved: false, id: '' }
  };

  const countedMovies = movies.slice(0, countOfCards);
  const movieCards = () => {
    if (currentLocation === '/movies') {
      return countedMovies.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movieData={movie}
          saveStatus={checkIsSaved(movie)}
        />
      ))
    } else {
      return movies.map((movie) => (
        <MoviesCard
          key={movie.movieId}
          movieData={movie}
          saveStatus={{ isSaved: true, id: movie._id }}
        />
      ))
    }
  };

  return (
    <>
      <ul className='movies-cardlist'>
        {movieCards()}
      </ul>
      { currentLocation === '/movies' && isMoreMovies && <MoreButton onClick={handleMoreClick}/> }
    </>
  )
}

export default MoviesCardList;