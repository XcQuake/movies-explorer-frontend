import './MoviesCardList.css';
import MoreButton from '../Buttons/MoreButton/MoreButton';

function MoviesCardList({children}) {
  return (
    <section className='movies-cardlist section'>
      <div className='movies-cardlist__wrapper'>
        <ul className='movies-cardlist__gallery'>
          {children}
        </ul>
        <MoreButton />
      </div>
    </section>
  )
}

export default MoviesCardList;