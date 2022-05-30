import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio section'>
      <div className='portfolio__wrapper'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__list-element'>
            <a
              className='portfolio__link'
              href='https://xcquake.github.io/how-to-learn/'
              target='_blank'
              rel="noreferrer"
            >
              Статичный сайт <div className='portfolio__arrow-icon' />
            </a>
          </li>
          <li className='portfolio__list-element'>
            <a
              className='portfolio__link'
              href='https://xcquake.github.io/russian-travel/index.html'
              target='_blank'
              rel="noreferrer"
            >
              Адаптивный сайт <div className='portfolio__arrow-icon' />
            </a>
          </li>
          <li className='portfolio__list-element'>
            <a
              className='portfolio__link'
              href='https://xcquake.github.io/mesto/'
              target='_blank'
              rel="noreferrer"
            >
              Одностраничное приложение <div className='portfolio__arrow-icon' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
