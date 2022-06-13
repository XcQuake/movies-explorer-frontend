import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <div className='saved-movies__wrapper'>
        <MoviesCardList>
          <MoviesCard />
          <MoviesCard />
        </MoviesCardList>
      </div>
    </main>
  )
}

export default SavedMovies;