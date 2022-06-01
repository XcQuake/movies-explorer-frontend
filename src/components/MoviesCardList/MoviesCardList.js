import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className='movies section'>
      <div className='movies__wrapper'>
        <ul className='movies__gallery'>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
        <button className='movies__more-button'>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;