import { Link } from 'react-router-dom';
import './AuthBar.css';

function AuthBar() {
  return (
    <div className='authbar'>
      <Link to='/signin' className='authbar__button authbar__button_signin'>Войти</Link>
      <Link to='/signup' className='authbar__button authbar__button_signup'>Регистрация</Link>
    </div>
  );
}

export default AuthBar;