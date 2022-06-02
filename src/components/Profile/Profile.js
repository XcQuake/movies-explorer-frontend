import './Profile.css';

function Profile() {
  const user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  };

  return (
    <main className='profile'>
      <div className='profile__wrapper'>
        <div className='profile__container'>
          <h2 className='profile__greeting'>Привет, {user.name}!</h2>
          <ul className='profile__info'>
            <li className='profile__info-field'>
              <span className='profile__info-title'>Имя</span>
              <p className='profile__info-value'>{user.name}</p>
            </li>
            <li className='profile__info-field'>
              <span className='profile__info-title'>E-mail</span>
              <p className='profile__info-value'>{user.email}</p>
            </li>
          </ul>
        </div>
        <div className='profile__navbar'>
          <button className='profile__button'>Редактировать</button>
          <button className='profile__button' style={{ color: '#FF3055' }}>Выйти из&nbsp;аккаунта</button>
        </div>
      </div>
    </main>
  );
}

export default Profile;
