import './MoviesCardList.css';

function MoviesCardList({children}) {
  return (
    <ul className='movies-cardlist'>
      {children}
    </ul>
  )
}

export default MoviesCardList;