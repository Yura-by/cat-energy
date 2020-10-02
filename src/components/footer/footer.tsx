import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../page-content/page-content';

const Footer = () => {
  return (
    <section className="footer">
      <h2 className="visually-hidden">Мы в соцсетех</h2>
      <div className="footer__wrapper">
        <Link to={AppRoute.MAIN} className="footer__link-logo">
          <img src="img/logo-footer.svg" alt="Логотип" width="128px" height="24px" className="footer__logo-link"/>
        </Link>

        <ul className="footer__social-list social-list">
          <li className="social-list_item">
            <a href="" className="social-list__link"><span className="visually-hidden">Мы в VK</span>
            <svg width="22" height="12" aria-hidden="true" className="social-list__image social-list__image--vk">
              <use xlinkHref="#sprite-vk"></use>
            </svg>
            </a>
          </li>
          <li className="social-list_item">
            <a href="" className="social-list__link"><span className="visually-hidden">Мы в Instargamm</span>
              <svg width="16" height="16" aria-hidden="true" className="social-list__image social-list__image--insta">
                <use xlinkHref="#sprite-insta"></use>
              </svg>
            </a>
          </li>
          <li className="social-list_item">
            <a href="" className="social-list__link"><span className="visually-hidden">Мы в Facebook</span>
              <svg width="10" height="19" aria-hidden="true" className="social-list__image social-list__image--facebook">
                  <use xlinkHref="#sprite-facebook"></use>
              </svg>
            </a>
          </li>
        </ul>

        <a href="https://htmlacademy.ru/" className="footer__copyright-link">
          <span className="footer__copyright-title">HTML Academy</span>
          <svg className="footer__copyright-image" width="27" height="34" aria-hidden="true">
            <use xlinkHref="#sprite-htmlacademy"></use>
          </svg>
        </a>
      </div>


    </section>
  );
};

export default Footer;
