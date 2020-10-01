import * as React from 'react';
import InteractiveExample from '../interactive-example/interactive-example';

const PageMain = () => {
  return (
    <main className="page-main">
      <div className="page-main__top-wrapper">
        <h1 className="page-main__title">
          Функциональное питание для котов
        </h1>

        <section className="page-main__introduction introduction">
          <h2 className="visually-hidden">Не тяни, сразу выбирай!</h2>
          <p className="introduction__tip">Занялся собой? Займись котом!</p>
          <a className="introduction__btn" href="">Подобрать программу</a>
        </section>
      </div>

      <section className="page-main__offers main-offers">
        <h2 className="visually-hidden">Список каталогов</h2>

        <article className="main-offers__link offer-link offer-link--slim">
          <div className="offer-link__wrapper">
            <h3 className="offer-link__title">Похудение</h3>
            <p className="offer-link__descripiton">Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.</p>
            <a href="" className="offer-link__referense">Каталог Slim</a>
          </div>
        </article>

        <article className="main-offers__link offer-link offer-link--pro">
          <div className="offer-link__wrapper">
            <h3 className="offer-link__title">Набор массы</h3>
            <p className="offer-link__descripiton">Заработать авториртет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!</p>
            <a href="" className="offer-link__referense">Каталог Pro</a>
          </div>
        </article>

      </section>

      <section className="page-main__description work-description">
        <h2 className="work-description__title">Как это работает</h2>
        <ul className="work-description__list">
          <li className="work-description__item work-description__item--leaf">
            Функциональное питание содержит только полезные питательные вещества.
          </li>
          <li className="work-description__item work-description__item--powder">
            Выпускается в виде порошка, который нужно лишь залить кипятком и готово.
          </li>
          <li className="work-description__item work-description__item--table-ware">
            Замените один-два приема обычной еды на наше функциональное питание.
          </li>
          <li className="work-description__item work-description__item--clock">
            Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!
          </li>
        </ul>
      </section>

      <section className="page-main__example example">
        <div className="exapmle__wrapper">
          <div className="exapmle__inner-container">
            <h2 className="example_title">Живой пример</h2>
            <p className="example__description">
              Борис сбросил 5кг за 2 месяца, просто заменив свой обычный корм на Cat Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
            </p>
            <div className="exapmle__inner-wrapper">
              <dl className="exapmle__list">
                <div className="example__item">
                  <dt className="example__value">
                    5 кг
                  </dt>
                  <dd className="example__desc">
                      Снижение веса
                  </dd>
                </div>
                <div className="example__item">
                  <dt className="example__value">
                    60 дней
                  </dt>
                  <dd className="example__desc">
                      Затрачено времени
                  </dd>
                </div>
              </dl>
              <p className="example__sum">
                <span className="example__span">Затраты на питание:</span>
                <span className="example__span"> 15 000 руб.</span>
              </p>
            </div>
          </div>


          <InteractiveExample />
        </div>

      </section>

      <div className="page-main__location__wrapper">
        <section className="page-main__partners to-partners">
          <h2 className="to-partners__title">
            Приглашаем<br /> к сотрудничеству дилеров!
          </h2>
          <address className="to-partners__address">
            ул. Большая<br /> Конюшенная, д. 19/8 <span>Санкт-Петербург</span>
          </address>
        </section>

        <section className="page-main__map">
          <h2 className="visually-hidden">Мы на карте!</h2>
        </section>
      </div>
    </main>
  );
};

export default PageMain;
