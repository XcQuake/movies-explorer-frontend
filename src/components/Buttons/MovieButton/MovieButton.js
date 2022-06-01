import './MovieButton.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';

function MovieButton() {
  const [isSaved, setIsSaved] = useState(false);

  function saveHandler() {
    setIsSaved(!isSaved);
  };

  return (
    <>
      <Route path='/movies'>
        <button
          className={`movie-button ${isSaved && 'movie-button_saved'}`}
          type='button'
          onClick={saveHandler}
          >
          <span className='movie-button__text'>Сохранить</span>
        </button>
      </Route>
      <Route path='/saved-movies'>
        <button
          className={`movie-button movie-button_remove`}
          type='button'
          onClick={saveHandler}
          >
        </button>
      </Route>
    </>
  );
}

export default MovieButton;