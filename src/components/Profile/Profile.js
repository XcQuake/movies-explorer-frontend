import { useContext, useRef, useState } from 'react';
import * as auth from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Profile.css';
import { CUSTOM_VALIDATION, POPUP_MESSAGES } from '../../utils/constants';

function Profile({onSuccesChange}) {
  const userContext = useContext(CurrentUserContext);
  const [userData, setUserData] = useState(userContext.userData);
  const initialValues = {
    username: userData.username,
    email: userData.email,
  };
  const [apiError, setApiError] = useState('');
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormWithValidation({initialValues});
  const nameInputRef = useRef(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDataLoad, setIsDataLoad] = useState(false);

  async function handleEdit(evt) {
    evt.preventDefault();
    await setIsEdit(true);
    nameInputRef.current.focus();
  };

  const isButtonActive = isValid && !isDataLoad;

  async function handleSubmit(evt) {
    evt.preventDefault();
    setApiError('');
    setIsDataLoad(true);
    setUserData({
      username: values.username,
      email: values.email,
    });

    auth.updateProfile(values.username, values.email)
      .then((data) => {
        setApiError('');
        setIsEdit(false);
        onSuccesChange(POPUP_MESSAGES.profile.success);
        resetForm({
          username: data.name,
          email: data.email,
        })
      })
      .catch((err) => {
        setApiError(err);
      })
      .finally(setIsDataLoad(false))
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
                  minLength='2'
                  maxLength='20'
                  pattern={CUSTOM_VALIDATION.username.pattern}
                  disabled={isDataLoad || !isEdit}
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
                  minLength='5'
                  maxLength='50'
                  pattern={CUSTOM_VALIDATION.email.pattern}
                  disabled={isDataLoad || !isEdit}
                />
              </label>
              <span className='profile__input-error'>{errors.email}</span>
            </fieldset>
          </div>
          <div className='profile__controls'>
            <span className='profile__error'>{apiError}</span>
            { isEdit
                ? <button
                    className='profile__button profile__button_save'
                    onClick={handleSubmit}
                    disabled={!isButtonActive}
                  >
                    Сохранить
                  </button>
                : <button className='profile__button' onClick={handleEdit}>Редактировать</button>
            }
            { !isEdit && <button className='profile__button profile__button_exit'>Выйти из аккаунта</button> }
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
