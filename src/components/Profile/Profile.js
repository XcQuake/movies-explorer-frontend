import { useContext, useEffect, useRef, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { validationConfig } from '../../utils/validationConfig';
import './Profile.css';

function Profile({currentUser, onSubmit}) {
  const [userData, setUserData] = useState(currentUser);
  const [isEdited, setIsEdited] = useState(false);
  const nameInputRef = useRef(false);
  const initialValues = {
    username: userData.username,
    email: userData.email,
  };
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormWithValidation({validations: validationConfig, initialValues});

  async function handleEdit(evt) {
    evt.preventDefault();
    await setIsEdited(true);
    nameInputRef.current.focus();
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit({
      username: values.username,
      email: values.email,
    });
    setUserData({
      username: values.username,
      email: values.email,
    });
    setIsEdited(false);
  };

  return (
    <main className='profile'>
      <div className='profile__wrapper'>
        <h2 className='profile__greeting'>Привет, {userData.username}!</h2>
        <form className='profile__container'>
          <div className='profile__info'>
            <fieldset className='profile__fieldset'>
              <label className='profile__field'>
                <span className='profile__label'>Имя</span>
                <input
                  name='username'
                  className='profile__input'
                  value={values.username || ''}
                  onChange={handleChange}
                  ref={nameInputRef}
                  disabled={!isEdited}
                />
              </label>
              <span className='profile__input-error'>{errors.username}</span>
            </fieldset>
            <fieldset className='profile__fieldset'>
              <label className='profile__field'>
                <span className='profile__label'>E-mail</span>
                <input
                  name='email'
                  className='profile__input'
                  value={values.email || ''}
                  onChange={handleChange}
                  disabled={!isEdited}
                />
              </label>
              <span className='profile__input-error'>{errors.email}</span>
            </fieldset>
          </div>
          <div className='profile__controls'>
            { isEdited
                ? <button
                    className='profile__button profile__button_save'
                    onClick={handleSubmit}
                    disabled={!isValid}
                  >
                    Сохранить
                  </button>
                : <button className='profile__button' onClick={handleEdit}>Редактировать</button>
            }
            { !isEdited && <button className='profile__button profile__button_exit'>Выйти из&nbsp;аккаунта</button> }
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
