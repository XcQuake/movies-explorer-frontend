import './Movies.css';
import { useState, useEffect } from 'react';
import { POPUP_MESSAGES } from '../../utils/constants';
import { filterMovies } from '../../utils/utils';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../Buttons/FilterCheckbox/FilterCheckbox';
import Preloader from '../Preloader/Preloader';

function Movies({onError}) {
  const [movies, setMovies] = useState([]);

  const [keyWord, setKeyWord] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);

  const allMovies = JSON.parse(localStorage.getItem('allMovies'));

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

  function getFilteredMovies(keyWord, isShortMovies) {
    return new Promise((resolve) => {
      const filteredMovies = keyWord
        ? filterMovies(allMovies, keyWord, isShortMovies)
        : [];
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

  const displayedContent = () => {
    return (
      <>
        {
          isDataLoading
          ? <Preloader />
          : isNothingFound
          ? <p className='movies__not-found'>Ничего не найдено</p>
          : <MoviesCardList movies={movies} />
        }
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