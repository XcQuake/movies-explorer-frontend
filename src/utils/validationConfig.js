export const validationConfig = {
  username: {
    required: {
      value: true,
      message: 'Необходимо заполнить поле',
    },
    pattern: {
      value: new RegExp(/^[\a-zA-Zа-яА-Я\sёЁ-]+$/),
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
      value: new RegExp(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/),
      message: 'Некорректный Email-адрес',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Необходимо заполнить поле',
    },
    pattern: {
      value: new RegExp(/(?=.*[0-9])/),
      message: 'Пароль должен содержать по крайней мере 1 цифру',
    },
    minLength: {
      value: 6,
      message: 'Минимальное количество символов: 6'
    }
  },
};
