import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </MoviesCardList>
    </main>
  )
}

export default Movies;