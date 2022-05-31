import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <h3 className='footer__title'>
          Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
        </h3>
        <div className='footer__container'>
          <ul className='footer__links'>
            <li>
              <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li>
              <a className='footer__link' href='https://github.com/XcQuake' target='_blank' rel="noreferrer">Github</a>
            </li>
            <li>
              <a className='footer__link' href='https://www.facebook.com/' target='_blank' rel="noreferrer">Facebook</a>
            </li>
          </ul>
          <p className='footer__year'>&copy;2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;