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

      <div className="page-header__wrapper">

        <div className="page-header__inner-wrapper">
          <a href="" className="page-header__logo">
            <svg x="0px" y="0px" className="page-header__logo-image"
                viewBox="0 0 33.32 37.61" width="33" height="38" enableBackground="new 0 0 33.32 37.61" xmlSpace="preserve">
              <g>
                <path fill="#FDC305" d="M6.07,20.72l0.05-2.27c6.67-0.91,13.44-1.37,20.16-1.33c-0.01,0.61-0.03,1.21-0.06,1.82
                  c0,0,2.92-1.35,6.04-1.81C29.9,10.81,23.8,6.31,16.65,6.31c-8.32,0-15.22,6.1-16.47,14.08C2.36,20.52,6.07,20.72,6.07,20.72z"/>
                <path fill="#FDC305" d="M27.24,24.23c-1.16,1.28-1.39,1.2-1.39,3.46c0,0.91,0.03,4.9,0.04,9.17c4.48-2.99,7.44-8.09,7.44-13.88
                  c0-1.05-0.1-2.08-0.28-3.08C31.22,20.96,28.22,23.14,27.24,24.23z"/>
                <path fill="#FDC305" d="M6.36,25.72c0,0-3.79-1.44-5.18-1.82C0.75,23.77,0.37,23.66,0,23.61c0.23,6.05,3.67,11.27,8.68,14.01
                  L6.36,25.72z"/>
              </g>
              <path fill="#F06351" d="M26.29,17.12c0.15-8.48-1.4-16.47-1.4-16.47s-0.14-1.3-0.86-0.24c-0.72,1.06-1.2,3.94-1.2,3.94
                c-7.44-0.43-12.77,0.34-12.77,0.34C9.24,1.95,7.85,0.75,7.18,1.04C6.51,1.33,6.46,4.35,6.46,4.35l-0.33,14.1
                C12.8,17.54,19.57,17.08,26.29,17.12z"/>
              <path d="M12.41,14c-0.05-0.09,1.02,0.68,1.41,0.92c0.38,0.24,0.61,0.42,0.61,0.59c0,0.17-0.26,0.34-0.62,0.34s-0.91-0.12-0.96-0.26
                c0,0,0.6-0.02,0.94-0.02h0.29C14.07,15.56,12.68,14.53,12.41,14z"/>
              <path d="M19.89,14.11c0,0-1.05,1.27-1.09,1.33c-0.04,0.06-0.17,0.34,0.19,0.29s1.11-0.22,1.22-0.28c0.11-0.06,0.07-0.2-0.12-0.18
                c-0.2,0.02-0.68,0.05-0.98,0.11l0.84-1.26C19.94,14.13,19.97,14.01,19.89,14.11z"/>
              <path d="M16.75,20.2c0,0,0.81-0.35,1.09-1.01c0.28-0.66,0.04-0.91-0.44-0.98c-0.48-0.07-1.34-0.03-1.74,0.34
                c-0.4,0.37-0.34,0.73-0.05,0.95C15.9,19.73,16.46,20.11,16.75,20.2z"/>
              <path fill="#F06351" d="M16.35,21.45c0,0-0.18,0.37-0.46,0.59c-0.24,0.19-0.57,0.36-1.02,0.39c-0.64,0.03-1.06-0.17-1.45-0.45
                c-0.2-0.14-0.4-0.25-0.53-0.44c-0.16-0.18-0.36-0.25-0.36-0.25s0.75,4.1,2.57,4.75c1.82,0.65,2.14-0.75,2.2-1.13
                c0.05-0.33,0-2.08-0.82-3.22C16.46,21.38,16.45,21.58,16.35,21.45z"/>
              <g>
                <path d="M14.71,22.59c-0.01,0-0.01,0-0.02,0c-1.29-0.01-2.29-1.36-2.33-1.42c-0.05-0.06-0.03-0.15,0.03-0.2
                  c0.06-0.05,0.15-0.03,0.2,0.03c0.01,0.01,0.96,1.29,2.1,1.3c0,0,0.01,0,0.01,0c0.58,0,1.13-0.33,1.63-0.99l0.14-0.19l0.1,0.21
                  c0,0.01,0.37,0.76,0.99,0.79c0.5,0.03,1.05-0.41,1.62-1.28c0.04-0.07,0.13-0.09,0.2-0.04c0.07,0.04,0.09,0.13,0.04,0.2
                  c-0.63,0.97-1.26,1.45-1.88,1.41c-0.56-0.04-0.94-0.49-1.12-0.76C15.91,22.27,15.33,22.59,14.71,22.59z"/>
              </g>
              <path fill="#F06351" d="M26.24,18.92c0,0-2.54,2.24-5.06,5.19s-5.29,4.88-5.29,4.88c-0.22-0.53-1.62-1.51-1.62-1.51
                s-3.13-2.14-5.18-3.82c-1.18-0.97-2.35-2.17-3.13-3.01c-0.29-0.02-1.07-0.06-2.01-0.11c4.69,6.97,11.97,8.8,11.97,8.8
                c0.86-0.14,3.28-1.86,5.08-3.26c1.8-1.4,4.75-4.52,5.94-5.89c0.6-0.69,0.94-1.42,1.14-1.97C26.96,18.6,26.24,18.92,26.24,18.92z"/>
            </svg>

            <p className="page-header__logo-title"><span className="page-header__logo-cat">Cat </span>Energy</p>
          </a>

          <button className="page-header__button" type="button">
            <span className="visually-hidden">Переключатель меню</span>
            <span className="page-header__button-line"></span>
          </button>
        </div>



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

      </div>


    </header>
  );
};

export default Header;
