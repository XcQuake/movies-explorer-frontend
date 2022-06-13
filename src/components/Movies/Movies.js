import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../Buttons/MoreButton/MoreButton';

function Movies() {
  return (
    <main className='movies'>
      <div className='movies__wrapper'>
        <MoviesCardList>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </MoviesCardList>
        <MoreButton />
      </div>
    </main>
  )
}

export default Movies;