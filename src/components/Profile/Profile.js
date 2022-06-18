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
    name: currentUser.name,
    email: currentUser.email,
  };
  const initialErrors = {
    name: '',
    email: '',
  };
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useFormWithValidation({validationConfig, initialValues, initialErrors});

  async function handleEditButtonClick(evt) {
    evt.preventDefault();
    await setIsEdited(true);
    nameInputRef.current.focus();
  };

  function handleSaveButtonClick(evt) {
    evt.preventDefault();
    setIsEdited(false);
  };

  return (
    <main className='profile'>
      <div className='profile__wrapper'>
        <h2 className='profile__greeting'>Привет, {currentUser.username}!</h2>
        <form className='profile__info'>
          <fieldset className='profile__info-fieldset'>
            <label className='profile__info-field'>
              <span className='profile__label'>Имя</span>
              <input className='profile__input'
                name='name'
                value={values.name || ''}
                onChange={handleChange}
                ref={nameInputRef}
                disabled={!isEdited}
              />
            </label>
            <label className='profile__info-field'>
              <span className='profile__label'>E-mail</span>
              <input
                name='email'
                className='profile__input'
                value={values.email || ''}
                onChange={handleChange}
                disabled={!isEdited}
              />
            </label>
          </fieldset>
          <div className='profile__controls'>
            { isEdited
                ? <button
                    className='profile__button profile__button_save'
                    onClick={handleSaveButtonClick}
                    disabled={isValid}
                  >
                    Сохранить
                  </button>
                : <button className='profile__button' onClick={handleEditButtonClick}>Редактировать</button>
            }
            { !isEdited && <button className='profile__button profile__button_exit'>Выйти из&nbsp;аккаунта</button> }
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
