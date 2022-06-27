import './SaveButton.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';

function SaveButton({onClick, isMovieSaved}) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(isMovieSaved)
  }, [isMovieSaved])

  return (
    <>
      <Route path='/movies'>
        <button
          className={isSaved ? 'save-button save-button_saved' : 'save-button'}
          type='button'
          onClick={onClick}
        >
          <span className='save-button__text'>Сохранить</span>
        </button>
      </Route>
      <Route path='/saved-movies'>
        <button
          className={`save-button save-button_remove`}
          type='button'
          onClick={onClick}
        >
        </button>
      </Route>
    </>
  );
}

export default SaveButton;