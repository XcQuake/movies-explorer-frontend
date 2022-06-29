import './AuthForm.css';

function AuthForm({ onSubmit, error, children, buttonText, isValid }) {
  return (
    <form className='authform' onSubmit={onSubmit} noValidate>
      <fieldset className='authform__fieldset'>
        { children }
      </fieldset>
      <div className='authform__controls'>
        <span className='authform__error'>{error}</span>
        <button
          className='authform__button'
          type='submit'
          aria-label='Авторизация'
          disabled={!isValid}
        >
          {buttonText}
        </button>
      </div>
    </form>
  )
}

export default AuthForm;