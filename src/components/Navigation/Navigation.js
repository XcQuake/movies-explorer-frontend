import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';

function Navigation({ isOpen }) {
  const navigationClassName = `navigation ${isOpen && 'navigation_open'}`;

  return (
    <div className={navigationClassName}>
      <div className='navigation__wrapper'>
        <nav className='navigation__bar'>
          <NavLink
            exact to='/'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to='/profile' className='navigation__account-link'>
          Аккаунт <div className='navigation__account-icon' />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;