import './SaveButton.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';

function SaveButton({onClick}) {
  const [isSaved, setIsSaved] = useState(false);

  function saveHandler() {
    setIsSaved(!isSaved);
    onClick();
  };

  return (
    <>
      <Route path='/movies'>
        <button
          className={`save-button ${isSaved && 'save-button_saved'}`}
          type='button'
          onClick={saveHandler}
        >
          <span className='save-button__text'>Сохранить</span>
        </button>
      </Route>
      <Route path='/saved-movies'>
        <button
          className={`save-button save-button_remove`}
          type='button'
          onClick={saveHandler}
        >
        </button>
      </Route>
    </>
  );
}

export default SaveButton;