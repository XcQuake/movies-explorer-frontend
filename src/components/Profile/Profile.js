import { useRef, useState } from 'react';
import './Profile.css';

function Profile() {
  const [isEdited, setIsEdited] = useState(false);
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const nameInputRef = useRef(false);

  function handleNameChange(evt) {
    evt.preventDefault();
    setName(evt.target.value);
  };

  function handleEmailChange(evt) {
    evt.preventDefault();
    setEmail(evt.target.value);
  }

  async function handleEditButtonClick(evt) {
    evt.preventDefault();
    await setIsEdited(true);
    nameInputRef.current.focus();
  };

  function handleSaveButtonClick(evt) {
    evt.preventDefault();
    setIsEdited(false);
  }

  return (
    <main className='profile'>
      <div className='profile__wrapper'>
        <h2 className='profile__greeting'>Привет, {name}!</h2>
        <form className='profile__info'>
          <fieldset className='profile__info-fieldset'>
            <label className='profile__info-field'>
              <span className='profile__label'>Имя</span>
              <input className='profile__input'
                name='name'
                value={name}
                onChange={handleNameChange}
                ref={nameInputRef}
                disabled={!isEdited}
              />
            </label>
            <label className='profile__info-field'>
              <span className='profile__label'>E-mail</span>
              <input
                name='email'
                className='profile__input'
                value={email}
                onChange={handleEmailChange}
                disabled={!isEdited}
              />
            </label>
          </fieldset>
          <div className='profile__controls'>
            { isEdited
                ? <button className='profile__button profile__button_save' onClick={handleSaveButtonClick}>Сохранить</button>
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
