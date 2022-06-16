import { useState } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { validationConfig } from '../../utils/validationConfig';
import AuthForm from '../AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import './Login.css';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const initialState = {
    email: '',
    password: '',
  };
  const initialErrors = {
    email: '',
    password: '',
  };

  function submitHandler(evt) {
    evt.preventDefault()
    setErrorMessage('Что-то пошло не так...')
  };

  const textConfig = {
    button: 'Войти',
    linkText: 'Ещё не зарегистрированы?',
    link: 'Регистрация',
  };

  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation({
    validations: validationConfig,
    initialState,
    initialErrors
  });

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
          isValid={isValid}
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
              value={values.email || ''}
              onChange={handleChange}
            />
            <p className='authform__error'>{errors.email}</p>
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
              value={values.password || ''}
              onChange={handleChange}
            />
            <p className='authform__error'>{errors.password}</p>
          </label>
        </AuthForm>
      </div>
    </main>
  );
}

export default Login;
