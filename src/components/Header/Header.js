import './Header.css';
import Logo from '../Logo/Logo'
import AuthBar from '../AuthBar/AuthBar';
import { Link, NavLink, Route, useHistory } from 'react-router-dom';
import BurgerButton from '../Buttons/BurgerButton/BurgerButton';

function Header({ onBurgerClick }) {
  const currentLocation = useHistory().location.pathname ;

  const headerBackground = {
    backgroundColor: currentLocation === '/' && '#073042'
  };

  return (
    <header className='header' style={headerBackground}>
      <div className='header__wrapper'>
        <Logo />
        <Route exact path='/'>
          <AuthBar />
        </Route>
        <Route path='/(movies|saved-movies|profile)'>
          <nav className='header__navbar'>
            <NavLink className='header__link' to='/movies' activeClassName='header__link_active'>Фильмы</NavLink>
            <NavLink className='header__link' to='/saved-movies' activeClassName='header__link_active'>Сохранённые фильмы</NavLink>
          </nav>
          <Link to='/profile' className='header__account-link'>
            Аккаунт <div className='header__account-icon' />
          </Link>
          <BurgerButton onBurgerClick={onBurgerClick} />
        </Route>
      </div>
    </header>
  );
}

export default Header;