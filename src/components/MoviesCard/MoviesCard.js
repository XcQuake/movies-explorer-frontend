import './MoviesCard.css';
import React, { useState, useContext, useEffect, useCallback }  from 'react';
import SaveButton from '../Buttons/SaveButton/SaveButton';
import { saveMovie, deleteMovie } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard({ movieData, id, image, nameRU, duration }) {
  const userContext = useContext(CurrentUserContext);
  const user = userContext.userData;
  const savedMovies = userContext.savedMovies;
  const setSavedMovies = userContext.setSavedMovies;
  const [isSaved, setIsSaved] = useState(false);
  const [mainApiId, setMainApiId] = useState('');

  const checkIsSaved = useCallback(() => {
    savedMovies.some((movie) => {
      if (movie.movieId === id && movie.owner === user.id) {
        setIsSaved(true);
        setMainApiId(movie._id);
      }
    })
  }, [id, user]);

  useEffect(() => {
    checkIsSaved();
  }, [checkIsSaved]);

  function getReadableDuration() {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  };

  function handleClickSaveMovie() {
    if (isSaved) {
      deleteMovie(mainApiId)
        .then(() => {
          setSavedMovies(savedMovies.filter((movie) => {
            return !(movie._id === mainApiId);
          }));
          setIsSaved(false);
        })
        .catch((err) => console.log(err))
    } else {
      saveMovie(movieData)
        .then((movie) => {
          setSavedMovies([...savedMovies, movie]);
          setIsSaved(true);
          setMainApiId(movie._id);
        })
        .catch(err => console.log(err))
    }
  };

  return (
    <li className='movies-card'>
      <SaveButton onClick={handleClickSaveMovie} isMovieSaved={isSaved}/>
      <img className='movies-card__image' src={image} alt={nameRU} />
      <div className='movies-card__description'>
        <h3 className='movies-card__title'>{nameRU}</h3>
        <p className='movies-card__duration'>{getReadableDuration()}</p>
      </div>
    </li>
  );
}

export default React.memo(MoviesCard);
