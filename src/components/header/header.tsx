import * as React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  menuItems: string[];
  linkHrefs: string[];
  activeItem: string;
  onMenuItemChange: (menu: string) => void;
  isMenuOpen: boolean;
  onMenuButtonClick: () => void;
  isInMainPage: boolean;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {menuItems, linkHrefs, activeItem, onMenuItemChange, isMenuOpen, onMenuButtonClick, isInMainPage} = props;
  const buttonMenuClassHidden = isMenuOpen ? `` : `page-header__botton--close`;
  const navClassHidden = isMenuOpen ? `page-header__nav--close` : ``;
  const colorFontClassName = isInMainPage ? `site-list--dark-background` : ``;
  return (
    <header className="page-header">

      <div className="page-header__wrapper">

        <div className="page-header__inner-wrapper">
          <Link to={linkHrefs[0]} className="page-header__logo">
            <picture>
              <source media="(min-width: 1300px)" srcSet="img/logo-desktop.svg" />
              <source media="(min-width: 768px)" srcSet="img/logo-tablet.svg" />
              <img src="img/logo-mobile.svg" width="191" height="38" alt="Барбершоп «Бородинский»" />
            </picture>
          </Link>

          <button className={`page-header__button ${buttonMenuClassHidden}`} type="button"
            onClick={onMenuButtonClick}
          >
            <span className="visually-hidden">Переключатель меню</span>
            <span className="page-header__button-line"></span>
          </button>
        </div>



        <nav className={`page-header__nav ${navClassHidden} main-nav`}>
          <ul className={`main-nav__list site-list ${colorFontClassName}`}>
            {menuItems.map((menuItem, index) => {
              const activeClass = menuItem === activeItem ? `site-list__item--active` : ``;
              return (
                <li className={`site-list__item ${activeClass}`} key={menuItem}>
                  <Link to={linkHrefs[index]} className="site-list_link"
                    onClick={() => {
                      onMenuItemChange(menuItem);
                    }}>{menuItem}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>


    </header>
  );
};

export default Header;
