import './MoviesCard.css';
import moviesImage from '../../images/movie_pic.png';
import SaveButton from '../Buttons/MovieButton/MovieButton';

function MoviesCard({movieData}) {
  const title = movieData.nameRU;
  const imageUrl = `https://api.nomoreparties.co/${movieData.image.url}`;
  const getDuration = () => {
    const hours = Math.floor(movieData.duration / 60);
    const minutes = movieData.duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  console.log(movieData)

  return (
    <li className='movies-card'>
      <SaveButton />
      <img className='movies-card__image' src={imageUrl} alt={title} />
      <div className='movies-card__description'>
        <h3 className='movies-card__title'>{title}</h3>
        <p className='movies-card__duration'>{getDuration()}</p>
      </div>
    </li>
  )
}

export default MoviesCard;