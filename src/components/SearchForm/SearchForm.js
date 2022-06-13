import './SearchForm.css';
import FilterCheckbox from '../Buttons/FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__wrapper'>
        <form className='search-form__form'>
          <input
            className='search-form__search-input'
            name='movie'
            type='text'
            id='movie'
            placeholder='Фильм'
            minLength='2'
            maxLength='250'
            required
          />
          <button type='submit' className='search-form__search-button'>Поиск</button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  )
}

export default SearchForm;