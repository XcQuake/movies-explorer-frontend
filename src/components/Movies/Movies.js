import './Movies.css';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../Buttons/MoreButton/MoreButton';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../Buttons/FilterCheckbox/FilterCheckbox';
import { BREAKPOINTS } from '../../utils/constants';
import { filterMovies } from '../../utils/utils';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [countOfCards, setCountOfCards] = useState(5);
  const [isMoreMovies, setIsMoreMovies] = useState(true);
  const [searchProps, setSearchProps] = useState({
    keyWord: '',
    isShortMovies: false,
  });
  const [keyWord, setKeyWord] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);

  const userContext = useContext(CurrentUserContext);
  const savedMovies = userContext.savedMovies;
  const allMovies = JSON.parse(localStorage.getItem('allMovies'));

  const handleResizeWindow = () => {
    setWidth(window.innerWidth)
  };

  // Добавляет слушатель изменения ширины экрана
  // и достаёт найденные фильмы из localStorage
  useEffect(() => {
    const storageMovies = JSON.parse(localStorage.getItem('searchedMovies'));
    const storageKeyWord = localStorage.getItem('keyWord');
    const storageIsShortMovies = JSON.parse(localStorage.getItem('isShortMovies'));
    storageMovies && setMovies(storageMovies);
    storageKeyWord && setKeyWord(storageKeyWord);
    storageIsShortMovies && setIsShortMovies(storageIsShortMovies);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const handleSetFilteredMovies = (keyWord, isShortMovies) => {
    const filteredMovies = filterMovies(allMovies, keyWord, isShortMovies);
    localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
    setMovies(filteredMovies)
  }

  const handleSearchSubmit = (keyWord) => {
    setKeyWord(keyWord);
    localStorage.setItem('keyWord', keyWord);
    handleSetFilteredMovies(keyWord, isShortMovies);
  };

  const handleChangeCheckbox = (isChecked) => {
    setIsShortMovies(isChecked);
    localStorage.setItem('isShortMovies', isChecked);
    handleSetFilteredMovies(keyWord, isChecked);
  }

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
  }, [width, BREAKPOINTS]);

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

  return (
    <>
      <SearchForm onSubmit={handleSearchSubmit}>
        <FilterCheckbox
          onChange={handleChangeCheckbox}
        />
      </SearchForm>
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
    </>
  )
}

export default Movies;