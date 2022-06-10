import './Header.css';
import Logo from '../Logo/Logo'
import AuthBar from '../AuthBar/AuthBar';
import BurgerButton from '../Buttons/BurgerButton/BurgerButton';

function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
        <AuthBar />
          <BurgerButton onBurgerClick={onBurgerClick} />
      </div>
    </header>
  );
}

export default Header;