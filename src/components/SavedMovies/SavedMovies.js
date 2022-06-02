import './SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {
  return (
    <main className='saved-movies'>
      <MoviesCardList>
        <MoviesCard />
        <MoviesCard />
      </MoviesCardList>
    </main>
  )
}

export default SavedMovies;