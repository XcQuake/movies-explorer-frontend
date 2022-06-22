import './Register.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { validationConfig } from '../../utils/validationConfig';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

function Register({ onSubmit, apiError }) {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };
  const initialErrors = {
    username: '',
    email: '',
    password: '',
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(
      values.username,
      values.email,
      values.password,
    )
  };

  const textConfig = {
    button: 'Зарегистрироваться',
    linkText: 'Уже зарегистрированы?',
    link: 'Войти',
  };

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useFormWithValidation({
    validations: validationConfig,
    initialValues,
    initialErrors,
  });

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
          config={textConfig}
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
              maxLength="80"
              required
              value={values.email || ''}
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
      </div>
    </div>
  );
}

export default Register;