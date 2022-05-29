import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <section className='main'>
      <Promo />
      <AboutProject />
      <Techs />
    </section>
  );
}

export default Main;