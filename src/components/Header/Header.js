import './Header.css';
import Logo from '../Logo/Logo'
import AuthBar from '../AuthBar/AuthBar';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <AuthBar />
    </header>
  )
}

export default Header;