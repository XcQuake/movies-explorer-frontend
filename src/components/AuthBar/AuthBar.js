import './AuthBar.css';

function AuthBar() {
  return (
    <div className='authbar'>
      <a href='/signin' className='authbar__button authbar__button_signin'>Войти</a>
      <a href='/signup' className='authbar__button authbar__button_signup'>Регистрация</a>
    </div>
  );
}

export default AuthBar;