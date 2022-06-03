import './Register.css';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  const [errorMessage, setErrorMessage] = useState('');

  function submitHandler(evt) {
    evt.preventDefault()
    setErrorMessage('Пока ничего не работает')
  };

  const textConfig = {
    button: 'Зарегистрироваться',
    already: 'Уже зарегистрированы?',
    link: 'Войти',
  }

  return (
    <main className='register'>
      <div className='register__wrapper'>
        <div className='register__greeting'>
          <Logo />
          <h2 className='register__greeting-text'>Добро пожаловать!</h2>
        </div>
        <AuthForm
          type={'register'}
          error={errorMessage}
          onSubmit={submitHandler}
          config={textConfig}
        >
          <label className='authform__field'>
            Имя
            <input
              className='authform__input'
              type='text'
              name='name'
              minLength="5"
              maxLength="80"
              required
            />
          </label>
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
          </label>
        </AuthForm>
      </div>
    </main>
  );
}

export default Register;