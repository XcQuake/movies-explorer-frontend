import './MoviesCard.css';
import React, { useState, useContext, useEffect }  from 'react';
import SaveButton from '../Buttons/SaveButton/SaveButton';
import { saveMovie, deleteMovie } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard({ movieData, saveStatus}) {
  const userContext = useContext(CurrentUserContext);
  const savedMovies = userContext.savedMovies;
  const setSavedMovies = userContext.setSavedMovies;
  const {
    image,
    nameRU,
    duration,
    trailerLink
  } = movieData;
  const [isSaved, setIsSaved] = useState(false);
  const [mainApiId, setMainApiId] = useState('');

  useEffect(() => {
    setIsSaved(saveStatus.isSaved);
    setMainApiId(saveStatus.id);
  }, [saveStatus]);

  function getReadableDuration() {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  function handleSaveMovie() {
    saveMovie(movieData)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
        setIsSaved(true);
      })
      .catch((err) => console.log(err))
  };

  function handleDeleteMovie() {
    deleteMovie(mainApiId)
      .then(() => {
        setSavedMovies(savedMovies.filter((movie) => {
          return !(movie._id === mainApiId);
        }));
        setIsSaved(false);
      })
      .catch((err) => console.log(err))
  };

  return (
    <li className='movies-card'>
      <SaveButton
        onClick={isSaved ? handleDeleteMovie : handleSaveMovie}
        isMovieSaved={isSaved}
      />
      <a href={trailerLink} target='_blank' rel='noreferrer'>
        <img className='movies-card__image' src={image} alt={nameRU} />
      </a>
      <div className='movies-card__description'>
        <h3 className='movies-card__title'>{nameRU}</h3>
        <p className='movies-card__duration'>{getReadableDuration()}</p>
      </div>
    </li>
  );
}

export default React.memo(MoviesCard);
