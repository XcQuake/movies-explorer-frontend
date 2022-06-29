import './Movies.css';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { BREAKPOINTS, POPUP_MESSAGES } from '../../utils/constants';
import { filterMovies } from '../../utils/utils';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../Buttons/MoreButton/MoreButton';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../Buttons/FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';

function Movies({onError}) {
  const [movies, setMovies] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [countOfCards, setCountOfCards] = useState(0);
  const [isMoreMovies, setIsMoreMovies] = useState(true);
  const [keyWord, setKeyWord] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);

  const userContext = useContext(CurrentUserContext);
  const savedMovies = userContext.savedMovies;
  const allMovies = JSON.parse(localStorage.getItem('allMovies'));

  const handleResizeWindow = () => {
    setWidth(window.innerWidth)
  };

  // достаёт данные из localStorage
  useEffect(() => {
    const storageMovies = JSON.parse(localStorage.getItem('searchedMovies'));
    const storageKeyWord = localStorage.getItem('keyWord');
    const storageIsShortMovies = JSON.parse(localStorage.getItem('isShortMovies'));
    storageMovies && (
      storageMovies.length === 0
      ? setIsNothingFound(true)
      : setMovies(storageMovies)
    );
    storageKeyWord && setKeyWord(storageKeyWord);
    storageIsShortMovies && setIsShortMovies(storageIsShortMovies);
  }, []);

  // Добавляет слушатель изменения ширины экрана
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [])

  function getFilteredMovies(keyWord, isShortMovies) {
    return new Promise((resolve) => {
      const filteredMovies = filterMovies(allMovies, keyWord, isShortMovies);
      resolve(filteredMovies);
    })
  };

  const handleSetMovies = (movies) => {
    movies.length === 0 ? setIsNothingFound(true) : setIsNothingFound(false);
    setMovies(movies);
    localStorage.setItem('searchedMovies', JSON.stringify(movies));
  };

  const handleSearchSubmit = (keyWord) => {
    setIsDataLoading(true);
    setKeyWord(keyWord);
    localStorage.setItem('keyWord', keyWord);
    getFilteredMovies(keyWord, isShortMovies)
      .then((movies) => handleSetMovies(movies))
      .catch(() => onError(POPUP_MESSAGES.movies.error))
      .finally(() => setIsDataLoading(false))
  };

  const handleChangeCheckbox = (isChecked) => {
    setIsDataLoading(true);
    setIsShortMovies(isChecked);
    localStorage.setItem('isShortMovies', isChecked);
    getFilteredMovies(keyWord, isChecked)
      .then((movies) => handleSetMovies(movies))
      .catch(() => onError(POPUP_MESSAGES.movies.error))
      .finally(() => setIsDataLoading(false))
  };

  // Устанавливает количество карточек в зависимости от ширины экрана
  useEffect(() => {
    if (width < BREAKPOINTS.tablet) {
      return setCountOfCards(5);
    };

    if (width >= BREAKPOINTS.tablet &&  width < BREAKPOINTS.desktop) {
      return setCountOfCards(8);
    };

    if (width >= BREAKPOINTS.desktop) {
      return setCountOfCards(12);
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
      if (width < BREAKPOINTS.desktop) {
        return setCountOfCards(countOfCards + 2);
      };
      if (width >= BREAKPOINTS.desktop) {
        return setCountOfCards(countOfCards + 3);
      };
    } else {
      setIsMoreMovies(false);
    }
  };

  const checkIsSaved = (movie) => {
    const savedMovie = savedMovies.find(item => item.movieId === movie.id)
    if (savedMovie) {
      return {
        isSaved: true,
        id: savedMovie._id,
      }
    } else {
      return {
        isSaved: false,
        id: '',
      }
    }
  };

  const countedMovies = movies.slice(0, countOfCards);
  const movieCards = countedMovies.map((movie) => (
      <MoviesCard
        key={movie.id}
        movieData={movie}
        image={`https://api.nomoreparties.co/${movie.image.url}`}
        nameRU={movie.nameRU}
        duration={movie.duration}
        saveStatus={checkIsSaved(movie)}
      />
    )
  );

  const displayedContent = () => {
    return (
      <>
        {
          isDataLoading
          ? <Preloader />
          : isNothingFound
          ? <p className='movies__not-found'>Ничего не найдено</p>
          : <MoviesCardList>
              { movieCards }
            </MoviesCardList>
        }
        { isMoreMovies && <MoreButton onClick={handleMoreClick}/> }
      </>
    )
  };

  return (
    <>
      <SearchForm onSubmit={handleSearchSubmit}>
        <FilterCheckbox
          onChange={handleChangeCheckbox}
        />
      </SearchForm>
      <div className='movies'>
        <div className='movies__wrapper'>
          { displayedContent() }
        </div>
      </div>
    </>
  );
}

export default Movies;