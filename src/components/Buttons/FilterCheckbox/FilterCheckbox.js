import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <form className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          name='shortfilm'
          id='shorfilm'
        />
        <span className='filter-checkox__slider' />
        Короткометражки
      </label>
    </form>
  )
}

export default FilterCheckbox;