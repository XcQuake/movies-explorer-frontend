import './SearchForm.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function SearchForm({onSubmit, onError, children}) {
  const currentLocation = useLocation().pathname;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    isValid ? onSubmit(values.keyWord) : onError('Необходимо ввести ключевое слово!');
  };

  useEffect(() => {
    if (currentLocation === '/movies') {
      const storageKeyWord = localStorage.getItem('keyWord');
      storageKeyWord && setValues({keyWord: storageKeyWord});
      setIsValid(true);
    } else {
      setValues({keyWord: ''});
    }
  }, [currentLocation]);

  const {
    values,
    setValues,
    handleChange,
    isValid,
    setIsValid,
  } = useFormWithValidation();

  return (
    <section className='search-form'>
      <div className='search-form__wrapper'>
        <form className='search-form__form' onSubmit={handleSubmit} noValidate>
          <input
            className='search-form__search-input'
            name='keyWord'
            type='text'
            id='keyWord'
            placeholder='Фильм'
            minLength='1'
            maxLength='250'
            value={values.keyWord || ''}
            onChange={handleChange}
            required
          />
          <button className='search-form__search-button'>Поиск</button>
        </form>
        {children}
      </div>
    </section>
  );
}

export default SearchForm;