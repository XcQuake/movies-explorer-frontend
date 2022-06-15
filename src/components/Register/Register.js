import './Register.css';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useValidation } from '../../hooks/useValidation';

function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState({
    username: false,
    email: false,
    password: false,
  })

  function submitHandler(evt) {
    evt.preventDefault()
    setErrorMessage('Пока ничего не работает')
    console.log('pepega')
  };

  const textConfig = {
    button: 'Зарегистрироваться',
    linkText: 'Уже зарегистрированы?',
    link: 'Войти',
  };

  const usernameValidate = useValidation(values.username, {
    minLength: 2,
    isRequired: true,
    isUsername: true,
  });

  const emailValidate = useValidation(values.email, {
    minLength: 5,
    isRequired: true,
    isEmail: true,
  });

  useEffect(() => {
    setIsValid(usernameValidate.validity && emailValidate.validity);
  }, [usernameValidate.validity, emailValidate.validity]);

  const handleChangeInput = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
  }

  const handleTouchInput = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    setIsTouched({...isTouched, [name]: true})
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
              onChange={handleChangeInput}
              onBlur={handleTouchInput}
            />
            <span className='authform__input-error'>{isTouched.username && usernameValidate.errorMessage}</span>
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
              onChange={handleChangeInput}
              onBlur={handleTouchInput}
            />
            <span className='authform__input-error'>{isTouched.email && emailValidate.errorMessage}</span>
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
              onChange={handleChangeInput}
              onBlur={handleTouchInput}
            />
            <span className='authform__input-error'>{}</span>
          </label>
        </AuthForm>
      </div>
    </main>
  );
}

export default Register;