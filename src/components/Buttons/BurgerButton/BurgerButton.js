import { useState } from 'react';
import './BurgerButton.css';

function BurgerButton({ onBurgerClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleBurgerClick() {
    onBurgerClick();
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <button
      className={`burger-button ${isMenuOpen && 'burger-button_active'}`}
      type='button'
      onClick={handleBurgerClick}
    >
      <span className='burger-button__line' />
      <span className='burger-button__line' />
      <span className='burger-button__line' />
    </button>
  );
}

export default BurgerButton;
