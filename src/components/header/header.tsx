import * as React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  menuItems: string[];
  linkHrefs: string[];
  activeItem: string;
  onMenuItemChange: (menu: string) => void;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {menuItems, linkHrefs, activeItem, onMenuItemChange} = props;
  return (
    <header className="page-header">

      <a href="" className="page-header__logo">
        <img src="" alt="Cat Energy" className="page-header__logo-image"/>
        <p className="page-header__logo-title">Cat Energy</p>
      </a>

      <nav className="page-header__nav main-nav">
        <ul className="main-nav__list site-list">
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
    </header>
  );
};

export default Header;
