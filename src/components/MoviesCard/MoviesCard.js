import './MoviesCard.css';
import moviesImage from '../../images/movie_pic.png';
import SaveButton from '../SaveButton/SaveButton';

function MoviesCard() {
  const movie = {
    img: moviesImage,
    title: 'Баския: Взрыв реальности',
    duration: '1ч 17м',
  }

  return (
    <li className='movies-card'>
      <SaveButton />
      <img className='movies-card__image' src={moviesImage} alt={movie.title} />
      <div className='movies-card__description'>
        <h3 className='movies-card__title'>{movie.title}</h3>
        <p className='movies-card__duration'>{movie.duration}</p>
      </div>
    </li>
  )
}

export default MoviesCard;