import './FilterCheckbox.css';

function FilterCheckbox({isChecked, onChange}) {
  return (
    <form className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          name='shortfilm'
          id='shorfilm'
          checked={isChecked}
          onChange={onChange}
        />
        <span className='filter-checkox__slider' />
        Короткометражки
      </label>
    </form>
  )
}

export default FilterCheckbox;