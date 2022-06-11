import { useState } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import './Login.css';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');

  function submitHandler(evt) {
    evt.preventDefault()
    setErrorMessage('Что-то пошло не так...')
  };

  const textConfig = {
    button: 'Войти',
    linkText: 'Ещё не зарегистрированы?',
    link: 'Регистрация',
  };

  return (
    <main className='login'>
      <div className='login__wrapper'>
        <div className='login__greeting'>
          <Logo />
          <h2 className='login__greeting-text'>Рады видеть!</h2>
        </div>
        <AuthForm
          type={'login'}
          error={errorMessage}
          onSubmit={submitHandler}
          config={textConfig}
        >
          <label className='authform__field'>
            E-mail
            <input
              className='authform__input'
              type='email'
              name='email'
              minLength="5"
              maxLength="80"
              required
            />
            <p className='authform__error'>{errorMessage}</p>
          </label>
          <label className='authform__field'>
            Пароль
            <input
              className='authform__input'
              type='password'
              name='password'
              minLength="6"
              maxLength="30"
              required
            />
            <p className='authform__error'>{errorMessage}</p>
          </label>
        </AuthForm>
      </div>
    </main>
  );
}

export default Login;
