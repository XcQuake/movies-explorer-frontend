import { useState, useEffect } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({onChange}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  useEffect(() => {
    const storageCheckboxState = JSON.parse(localStorage.getItem('isShortFilms'));
    storageCheckboxState && setIsChecked(storageCheckboxState);
  }, [])

  return (
    <form className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          name='shortfilm'
          id='shorfilm'
          checked={isChecked}
          onChange={handleChange}
        />
        <span className='filter-checkox__slider' />
        Короткометражки
      </label>
    </form>
  )
}

export default FilterCheckbox;