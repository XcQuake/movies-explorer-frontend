import './MoviesCard.css';
import SaveButton from '../Buttons/MovieButton/MovieButton';

function MoviesCard({movieData}) {
  const movie = {
    title: movieData.nameRU,
    image: `https://api.nomoreparties.co/${movieData.image.url}`,
    getDuration: () => {
      const hours = Math.floor(movieData.duration / 60);
      const minutes = movieData.duration % 60;
      return `${hours}ч ${minutes}м`;
    }
  };

  return (
    <li className='movies-card'>
      <SaveButton />
      <img className='movies-card__image' src={movie.image} alt={movie.title} />
      <div className='movies-card__description'>
        <h3 className='movies-card__title'>{movie.title}</h3>
        <p className='movies-card__duration'>{movie.getDuration()}</p>
      </div>
    </li>
  );
}

export default MoviesCard;