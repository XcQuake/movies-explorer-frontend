import { useState, useEffect } from 'react';

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [validity, setValidity] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const regExps = {
    url: /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
    email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    password: /^[a-zA-Z0-9]+$/,
    username: /^[\a-zA-Zа-яА-Я\sёЁ-]+$/,
  }

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          if (value.length < validations.minLength) {
            setMinLengthError(true);
            setErrorMessage(`Минимальное количество символов: ${validations.minLength}`)
          } else {
            setMinLengthError(false);
            setErrorMessage('')
          }
          break;
        case 'isRequired':
          if(value) {
            setIsEmpty(false);
            setErrorMessage('')
          } else {
            setIsEmpty(true);
            setErrorMessage('Необходимо заполнить поле');
          }
          break;
        case 'isUrl':
          if (regExps.url.test(value)) {
            setUrlError(false);
            setErrorMessage('')
          } else {
            setUrlError(true);
            setErrorMessage('Введите ссылку на изображение');
          }
          break;
        case 'isEmail':
          if (regExps.email.test(value)) {
            setEmailError(false);
            setErrorMessage('')
          } else {
            setEmailError(true);
            setErrorMessage('Некорректный Email-адрес')
          }
          break;
        case 'isPassword':
          if (regExps.password.test(value)) {
            setPasswordError(false);
            setErrorMessage('')
          } else {
            setPasswordError(true);
            setErrorMessage('Пароль должен состоять из латинских букв');
          }
          break;
        case 'isUsername':
          if (regExps.username.test(value)) {
            setUsernameError(false);
            setErrorMessage('')
          } else {
            setUsernameError(true);
            setErrorMessage('Имя может содержать только латиницу, кириллицу, пробел или дефис');
          }
          break;
        default:
          break;
      }
    }
  }, [value, validations])

  useEffect(() => {
    if (isEmpty || minLengthError || urlError || emailError || passwordError || usernameError) {
      setValidity(false)
    } else {
      setValidity(true)
    }
  }, [isEmpty, minLengthError, urlError, emailError, passwordError, usernameError])

  return {
    validity,
    errorMessage
  }
}