import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CUSTOM_VALIDATION } from '../../utils/constants';
import AuthForm from '../AuthForm/AuthForm';
import Logo from '../Logo/Logo';
import './Login.css';

function Login({onSubmit, apiError}) {
  function submitHandler(evt) {
    evt.preventDefault()
    onSubmit(
      values.email,
      values.password,
    );
  };

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation();

  return (
    <main className='login'>
      <div className='login__wrapper'>
        <div className='login__greeting'>
          <Logo />
          <h2 className='login__greeting-text'>Рады видеть!</h2>
        </div>
        <AuthForm
          type={'login'}
          error={apiError}
          onSubmit={submitHandler}
          buttonText={'Войти'}
          isValid={isValid}
        >
          <label className='authform__field'>
            E-mail
            <input
              className='authform__input'
              type='email'
              name='email'
              minLength="5"
              maxLength="50"
              required
              value={values.email || ''}
              pattern={CUSTOM_VALIDATION.email.pattern}
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
        <p className='authform__link-text'>
          Ещё не зарегистрированы?
          <Link className='authform__link' to='/signup'>Регистрация</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
