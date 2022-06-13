import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project section'>
      <div className='about-project__wrapper'>
        <h2 className='about-project__title section-title'>О&nbsp;проекте</h2>
        <div className='about-project__container'>
          <div className='about-project__paragraph'>
            <h3 className='about-project__paragraph-header'>Дипломный проект включал 5&nbsp;этапов</h3>
            <p className='about-project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.
            </p>
          </div>
          <div className='about-project__paragraph'>
            <h3 className='about-project__paragraph-header'>На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
            <p className='about-project__text'>
              У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about-project__statusbar'>
          <div className='about-project__statusbar-block'>1 неделя</div>
          <div className='about-project__statusbar-block'>4 недели</div>
          <div className='about-project__statusbar-block'>Back-end</div>
          <div className='about-project__statusbar-block'>Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;