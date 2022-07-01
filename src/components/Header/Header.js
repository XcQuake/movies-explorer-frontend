import './Header.css';
import Logo from '../Logo/Logo'
import AuthBar from '../AuthBar/AuthBar';
import { Link, NavLink, Route, useLocation } from 'react-router-dom';
import BurgerButton from '../Buttons/BurgerButton/BurgerButton';
import { useEffect, useState } from 'react';

function Header({ isLoggedIn, onBurgerClick }) {
  const currentLocation = useLocation().pathname;
  const backgroundColor = currentLocation === '/' ? '#073042' : 'inherit';
  const styles = {
    header: {
      backgroundColor: currentLocation === '/' ? '#073042' : 'inherit',
    },
    link: {
      color: currentLocation === '/' ? '#fff' : '#000',
    }
  }

  const loggedInHeader = (
      <>
        <nav className='header__navbar'>
          <NavLink
            className='header__link'
            to='/movies'
            activeClassName='header__link_active'
            style={styles.link}
          >
            Фильмы
          </NavLink>
          <NavLink
            className='header__link'
            to='/saved-movies'
            activeClassName='header__link_active'
            style={styles.link}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          to='/profile'
          className='header__account-link'
          style={styles.link}
        >
          Аккаунт <div className='header__account-icon' />
        </Link>
        <BurgerButton onBurgerClick={onBurgerClick} />
      </>
  );

  const loggedOutHeader = (
      <AuthBar />
  );

  return (
    <header className='header' style={styles.header}>
      <div className='header__wrapper'>
        <Logo />
        {
          isLoggedIn ? loggedInHeader : loggedOutHeader
        }
      </div>
    </header>
  );
}

export default Header;