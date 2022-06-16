export const validationConfig = {
  username: {
    required: {
      value: true,
      message: 'Необходимо заполнить поле',
    },
    pattern: {
      value: /^[\a-zA-Zа-яА-Я\sёЁ-]+$/,
      message: 'Имя может содержать только латиницу, кириллицу, пробел или дефис',
    },
    minLength: {
      value: 2,
      message: 'Минимальное количество символов: 2'
    }
  },
  email: {
    required: {
      value: true,
      message: 'Необходимо заполнить поле',
    },
    pattern: {
      value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
      message: 'Некорректный Email-адрес',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Необходимо заполнить поле',
    },
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: 'Пароль должен состоять только из цифр и латинских букв',
    },
  },
};
