import './AuthForm.css';

function AuthForm({ onSubmit, children, config, isValid }) {
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
          disabled={!isValid}
        >
          {config.button}
        </button>
        <p className='authform__link-text'>
          {config.linkText}
          <a className='authform__link' href='/signin'>{config.link}</a>
        </p>
      </div>
    </form>
  )
}

export default AuthForm;