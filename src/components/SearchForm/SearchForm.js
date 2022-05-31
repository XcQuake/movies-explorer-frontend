import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Navigation() {
  return (
    <section className='navigation'>
      <div className='navigation__wrapper'>
        <form className='navigation__form'>
          <fieldset className='navigation__search-block'>
            <input
              className='navigation__search-field'
              name='movie'
              type='text'
              id='movie'
              placeholder='Фильм'
              minLength='2'
              maxLength='250'
            />
            <button type='submit' className='navigation__search-button'>Поиск</button>
          </fieldset>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  )
}

export default Navigation;