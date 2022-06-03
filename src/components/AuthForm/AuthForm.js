import './AuthForm.css';

function AuthForm({ onSubmit, children, config }) {
  return (
    <form className='authform' onSubmit={onSubmit} noValidate>
      <fieldset className='authform__fieldset'>
        { children }
      </fieldset>
      <div className='authform__controls'>
        <button
          className='authform__button'
          type='submit'
          aria-label='Авторизация'
        >
          {config.button}
        </button>
        <p className='authform__already-text'>
          {config.already}
          <a className='authform__link' href='/signin'>{config.link}</a>
        </p>
      </div>
    </form>
  )
}

export default AuthForm;