import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../Buttons/MoreButton/MoreButton';
import { useState, useEffect } from 'react';

function Movies({searchedMovies}) {
  const [movies, setMovies] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const [countOfCards, setCountOfCards] = useState(5);
  const [isMoreMovies, setIsMoreMovies] = useState(true);

  const handleResizeWindow = () => {
    setWidth(window.innerWidth)
  };

  const breakPoints = {
    tablet: 535,
    desktop: 870,
  };

  // Достаёт массив с фильмами из LocalStorage при инициализации
  // useEffect(() => {

  //   setMovies
  // }, [])

  useEffect(() => {
    setMovies(searchedMovies);
  }, [searchedMovies])

  // Добавляет слушатель изменения ширины экрана
  useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    localMovies && setMovies(localMovies);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // Устанавливает количество карточек в зависимости от ширины экрана
  useEffect(() => {
    if (width < breakPoints.tablet) {
      return setCountOfCards(5);
    };

    if (width >= breakPoints.tablet &&  width < breakPoints.desktop) {
      return setCountOfCards(8);
    };

    if (width >= breakPoints.desktop) {
      return setCountOfCards(12);
    };
  }, [width, breakPoints.tablet, breakPoints.desktop]);

  // Устанавливает состояние кнопки "Ещё"
  useEffect(() => {
    if (countOfCards >= movies.length) {
      setIsMoreMovies(false);
    } else {
      setIsMoreMovies(true);
    }
  }, [countOfCards, movies])

  const handleMoreClick = () => {
    if (countOfCards < movies.length) {
      if (width < breakPoints.desktop) {
        return setCountOfCards(countOfCards + 2);
      };
      if (width >= breakPoints.desktop) {
        return setCountOfCards(countOfCards + 3);
      };
    } else {
      setIsMoreMovies(false);
    }
  };

  const countedMovies = movies.slice(0, countOfCards);
  const movieCards = countedMovies.map((movie) => (
      <MoviesCard
        key={movie.id}
        movieData={movie}
      />
    )
  );

  return (
    <div className='movies'>
      <div className='movies__wrapper'>
        <MoviesCardList>
          { movieCards }
        </MoviesCardList>
        {
          isMoreMovies && <MoreButton onClick={handleMoreClick}/>
        }
      </div>
    </div>
  )
}

export default Movies;