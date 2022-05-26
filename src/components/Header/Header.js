import './Header.css';
import Logo from '../Logo/Logo'
import AuthBar from '../AuthBar/AuthBar';

function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
        <AuthBar />
      </div>
    </header>
  );
}

export default Header;