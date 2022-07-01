import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../Buttons/FilterCheckbox/FilterCheckbox';
import { filterMovies } from '../../utils/utils';

function SavedMovies() {
  const userContext = useContext(CurrentUserContext);
  const savedMovies = userContext.savedMovies;
  const [movies, setMovies] = useState([]);
  const [searchProps, setSearchProps] = useState({
    keyWord: '',
    isShortMovies: false,
  });

  useEffect(() => {
    setMovies(savedMovies);
    handleSetFilteredMovies(searchProps.keyWord, searchProps.isShortMovies)
  }, [savedMovies]);

  const handleSetFilteredMovies = (keyWord, isShortMovies) => {
    const filteredMovies = filterMovies(savedMovies, keyWord, isShortMovies);
    setMovies(filteredMovies)
  };

  const handleSubmitSearch = (keyWord) => {
    setSearchProps({...searchProps, keyWord: keyWord});
    handleSetFilteredMovies(keyWord, searchProps.isShortMovies);
  };

  const handleChangeCheckbox = (isChecked) => {
    setSearchProps({...searchProps, isShortMovies: isChecked});
    handleSetFilteredMovies(searchProps.keyWord, isChecked);
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmitSearch} >
        <FilterCheckbox
          onChange={handleChangeCheckbox}
        />
      </SearchForm>
      <div className='saved-movies'>
        <div className='saved-movies__wrapper'>
          <MoviesCardList movies={movies} />
        </div>
      </div>
    </>
  );
}

export default SavedMovies;