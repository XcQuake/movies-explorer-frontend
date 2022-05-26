import './Header.css';
import Logo from '../Logo/Logo'

function Header() {
  return (
    <header className='header'>
      <Logo />
      <div className='header__authorization'>
        <button className='header__button header__button_signup'>Регистрация</button>
        <button className='header__button header__button_signin'>Войти</button>
      </div>
    </header>
  )
}

export default Header;