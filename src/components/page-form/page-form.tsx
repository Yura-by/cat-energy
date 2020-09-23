import * as React from 'react';

const PageForm = () => {
  return (
    <main className="page-form">
      <h1 className="page-form__title">Подбор программы</h1>
      <form className="page-form__form form">
        <h2 className="form__title">Подбор программы</h2>
        <p className="form__desc">
          Заполните анкету и мы подберем прграмму питания для вашего кота
        </p>

        <fieldset className="form__user-data user-data">
          <label htmlFor="user-data-name" className="user-data__label">имя:*</label>
          <input type="text" id="user-data-name" className="user_data__input" placeholder="Барсик"/>

          <label htmlFor="user-data-weight" className="user-data__label">Вес(кг):*</label>
          <input type="text" id="user-data-weight" className="user_data__weight" placeholder="7"/>

          <label htmlFor="user-data-age" className="user-data__label">Возраст (лет):</label>
          <input type="text" id="user-data-age" className="user_data__input" placeholder="7"/>
        </fieldset>

        <fieldset className="form__dest dest">
          <input type="radio" name="dest" className="dest__input" id="dest-slimming" defaultValue="slimming" defaultChecked/>
          <label htmlFor="dest-slimming" className="dest__label">Похудение</label>

          <input type="radio" name="dest" className="dest__input" id="dest-plump" defaultValue="plump"/>
          <label htmlFor="dest-plump" className="dest__label">Набор массы</label>

          <input type="radio" name="dest" className="dest__input" id="dest-dont-know" defaultValue="nothing"/>
          <label htmlFor="dest-dont-know" className="dest__label">Не знаю (нужен ваш совет)</label>
        </fieldset>

        <fieldset className="form__contacts contacts">
          <legend className="contacts__title">Контактные данные (владельца кота)</legend>
          <label htmlFor="contacts-email" className="contacts__label">e-mail:*</label>
          <input type="email" className="contacts__input" placeholder="kuklachev@gmail.com" id="contacts-email"/>

          <label htmlFor="contacts-phone" className="contacts__label">телефон:*</label>
          <input type="email" className="contacts__input" placeholder="8(960)900-600-90" id="contacts-phone"/>
        </fieldset>

        <div className="form__comments comments">
          <label htmlFor="comment-text" className="comments__label">Комментарий</label>
          <textarea name="comment" id="comment-text" className="comments__field" defaultValue="Расскажите обо всех повадках кота" />
        </div>

        <fieldset className="form__addit addit-to-order">
          <label htmlFor="sugar" className="addit-to-order__label" >Сахарозаменитель</label>
          <input type="checkbox"  name="sugar" className="addit-to-order__input" id="sugar" defaultChecked/>

          <label htmlFor="water" className="addit-to-order__label">Питьевая вода</label>
          <input type="checkbox" name="water" className="addit-to-order__input" id="water"/>

          <label htmlFor="milk" className="addit-to-order__label">Молоко</label>
          <input type="checkbox" name="milk" className="addit-to-order__input" id="milk"/>

          <label htmlFor="vitamins" className="addit-to-order__label">Витамины</label>
          <input type="checkbox" name="vitamins" className="addit-to-order__input" id="vitamins"/>
        </fieldset>

        <button className="form__submit-button" type="button">
          Отправить заявку
        </button>

        <span className="form__clarific"><sup>*</sup>- Обязательные поля</span>
      </form>
    </main>
  );
};

export default PageForm;

