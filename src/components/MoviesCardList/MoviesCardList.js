
import './MoviesCardList.css';

function MoviesCardList({children}) {
  return (
    <section className='movies-cardlist section'>
      <div className='movies-cardlist__wrapper'>
        <ul className='movies-cardlist__gallery'>
          {children}
        </ul>
        <button className='movies-cardlist__more-button'>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;