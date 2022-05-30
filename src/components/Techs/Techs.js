import './Techs.css';

function Techs() {
  return (
    <section className='techs section'>
      <div className='techs__wrapper'>
        <h2 className='techs__title section-title'>Технологии</h2>
        <h3 className='techs__subtitle'>7&nbsp;технологий</h3>
        <p className='techs__paragraph'>
          На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
        </p>
        <ui className='techs__techlist'>
          <li className='techs__tech'>HTML</li>
          <li className='techs__tech'>CSS</li>
          <li className='techs__tech'>JS</li>
          <li className='techs__tech'>React</li>
          <li className='techs__tech'>Git</li>
          <li className='techs__tech'>Express.js</li>
          <li className='techs__tech'>mongoDB</li>
        </ui>
      </div>
    </section>
  );
}

export default Techs;