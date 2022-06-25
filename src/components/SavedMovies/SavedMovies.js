import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <div className='saved-movies'>
      <div className='saved-movies__wrapper'>
        <MoviesCardList>
        </MoviesCardList>
      </div>
    </div>
  )
}

export default SavedMovies;