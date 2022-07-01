import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './FilterCheckbox.css';

function FilterCheckbox({onChange}) {
  const currentLocation = useLocation().pathname;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  useEffect(() => {
    if (currentLocation === '/movies') {
      const storageCheckboxState = JSON.parse(localStorage.getItem('isShortMovies'));
      storageCheckboxState && setIsChecked(storageCheckboxState);
    } else {
      setIsChecked(false);
    }
  }, []);

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
  );
}

export default FilterCheckbox;