import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <section className='movies-cardlist section'>
      <div className='movies-cardlist__wrapper'>
        <ul className='movies-cardlist__gallery'>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
        <button className='movies-cardlist__more-button'>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;