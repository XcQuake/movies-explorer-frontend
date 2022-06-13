import './AboutMe.css';
import photo from '../../images/myPhoto.jpg';

function AboutMe() {
  return (
    <section className='about-me section'>
      <div className='about-me__wrapper'>
        <h2 className='about-me__title section-title'>Студент</h2>
        <div className='about-me__container'>
          <img className='about-me__photo' src={photo} alt='Моя фотография' />
          <div className='about-me__info'>
            <h3 className='about-me__name'>Булат</h3>
            <p className='about-me__spec'>Фронтенд-разработчик, 23&nbsp;года.</p>
            <p className='about-me__description'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus atque impedit voluptate laudantium expedita nihil placeat officia mollitia exercitationem
              debitis eveniet unde quos molestiae at possimus eos dicta, vero ut cum harum corrupti nisi est? Nisi ullam,
              reprehenderit voluptatum impedit et, error vero animi laboriosam architecto quod at! Cupiditate, ea.
            </p>
          </div>
          <ul className='about-me__links'>
            <li>
              <a className='about-me__link' href='https://github.com/XcQuake' target='_blank' rel="noreferrer" >Github</a>
            </li>
            <li>
              <a className='about-me__link' href='https://www.codewars.com/users/XcQuake' target='_blank' rel="noreferrer">Codewars</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default AboutMe;