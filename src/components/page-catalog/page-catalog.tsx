import * as React from 'react';

import {AdditionalOffers, MainOffers} from './mock';

const PageCatalog = () => {
  return (
    <main className="page-catalog">
      <h2 className="page-catalog__title">
        Каталог продукции
      </h2>

      <section className="page-catalog__goods goods">
        <h3 className="visually-hidden">Основные виды продукции</h3>
         <ul className="goods__list">
           {MainOffers.map((it) => {
             return (
              <li className="goods__item" key={it.id}>
                <h4 className="goods__title">Cat Energy {it.title}</h4>
                <img src={it.image} alt={it.title}className="goods__image"/>
                <table className="goods__table goods-desc">
                  <thead>
                    <tr className="goods-desc__row">
                      <th className="goods-desc__cell">Объем</th>
                      <th className="goods-desc__cell">Вкус</th>
                      <th className="goods-desc__cell">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="goods-desc__row">
                      <td className="goods-desc__data">{it.data.volume}</td>
                      <td className="goods-desc__data">{it.data.taste}</td>
                      <td className="goods-desc__data">{it.data.price}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
             );
           })}

           <li className="goods__full-item full-goods">
             <p className="full-goods__title">
               <span className="full-goods__main-title">
                  Показать еще 100500 товаров
                 </span>
                 <span className="full-goods__sub-title">
                  На самом деле вкусов гораздо больше!
                 </span>
             </p>
             <button className="full-goods__button">
               Показать все
             </button>
           </li>
         </ul>
      </section>

      <section className="page-catalog__addit-goods addit-goods">
        <h2 className="addit-goods__title">
          Дополнительные товары
        </h2>
        <ul className="addit-goods__list">
          {AdditionalOffers.map((it) => {
            return (
              <li className="addit-goods__item" key={it.id}>
                <p className="addit-goods__title">
                  {it.title}
                </p>
                <p className="addit-goods__desctiption">
                  {it.description}
                </p>
                <span className="addit-goods__price">
                  {it.price}
                </span>
                <button className="addit-goods__button" type="button">
                  Заказать
                </button>
              </li>
            );
          })}

        </ul>
      </section>

      <p className="page-catalog__promo">
        Закажите все и получите чеход для кота в подарок!
      </p>

    </main>
  );
};

export default PageCatalog;
