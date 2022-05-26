import './AuthBar.css';

function AuthBar() {
  return (
    <div className='authbar'>
      <button className='authbar__button authbar__button_signup'>Регистрация</button>
      <button className='authbar__button authbar__button_signin'>Войти</button>
    </div>
  )
}

export default AuthBar;