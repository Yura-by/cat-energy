import * as React from 'react';

enum Menu {
  MAIN = `Главная`,
  CATALOG = `Каталог продукции`,
  PROGRAM =  `Подбор программы`,
}

const Header = () => {
  return (
    <header className="page-header">

      <a href="" className="page-header__logo">
        <img src="" alt="Cat Energy" className="page-header__logo-image"/>
        <p className="page-header__logo-title">Cat Energy</p>
      </a>

      <nav className="page-header__nav main-nav">
        <ul className="main-nav__list site-list">
          {Object.values(Menu).map((menuItem) => <li className="site-list_item" key={menuItem}><a href="" className="site-list_link">{menuItem}</a></li>)}
        </ul>
      </nav>

    </header>
  );
};

export default Header;
