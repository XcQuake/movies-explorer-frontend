import './Register.css';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import { AUTHFORM_TEXTS, CUSTOM_VALIDATION } from '../../utils/constants';

function Register({ onSubmit, apiError }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(
      values.username,
      values.email,
      values.password,
    );
  };

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation({});

  return (
    <div className='register'>
      <div className='register__wrapper'>
        <div className='register__greeting'>
          <Logo />
          <h2 className='register__greeting-text'>Добро пожаловать!</h2>
        </div>
        <AuthForm
          type={'register'}
          error={apiError}
          onSubmit={handleSubmit}
          buttonText={'Зарегистрироваться'}
          isValid={isValid}
        >
          <label className='authform__field'>
            Имя
            <input
              className='authform__input'
              type='text'
              name='username'
              minLength="2"
              maxLength="20"
              typeof=''
              required
              value={values.username || ''}
              pattern={CUSTOM_VALIDATION.username.pattern}
              onChange={handleChange}
            />
            <span className='authform__input-error'>{errors.username}</span>
          </label>
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
            <span className='authform__input-error'>{errors.email}</span>
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
            <span className='authform__input-error'>{errors.password}</span>
          </label>
        </AuthForm>
        <p className='authform__link-text'>
          Уже зарегистрированы?
          <Link className='authform__link' to='/signin'>Войти</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;