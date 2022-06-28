import './SearchForm.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({onSubmit, children}) {
  const currentLocation = useLocation().pathname;
  const [keyWord, setKeyWord] = useState('');
  const handleInput = (evt) => {
    setKeyWord(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(keyWord);
  };

  useEffect(() => {
    if (currentLocation === '/movies') {
      const storageKeyWord = localStorage.getItem('keyWord');
      storageKeyWord && setKeyWord(storageKeyWord);
    } else {
      setKeyWord('');
    }
  }, [currentLocation])

  return (
    <section className='search-form'>
      <div className='search-form__wrapper'>
        <form className='search-form__form' onSubmit={handleSubmit}>
          <input
            className='search-form__search-input'
            name='keyWord'
            type='text'
            id='keyWord'
            placeholder='Фильм'
            minLength='2'
            maxLength='250'
            value={keyWord}
            onChange={handleInput}
            required
          />
          <button type='submit' className='search-form__search-button'>Поиск</button>
        </form>
        {children}
      </div>
    </section>
  );
}

export default SearchForm;