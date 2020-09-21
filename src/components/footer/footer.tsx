import * as React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <h2 className="footer__title">Cat Energy</h2>
      <ul className="footer__social-list social-list">
        <li className="social-list_item"><a href="" className="social-list__link"><span className="visually-hidden">Мы в VK</span></a></li>
        <li className="social-list_item"><a href="" className="social-list__link"><span className="visually-hidden">Мы в Instargamm</span></a></li>
        <li className="social-list_item"><a href="" className="social-list__link"><span className="visually-hidden">Мы в Facebook</span></a></li>
      </ul>
      <p className="footer__copyright">
        <span className="footer__copyright-title">Html Academy</span>
        <img src="https://htmlacademy.ru/program" alt="HtmlAcademy" className="copyright__log"/>
      </p>
    </section>
  );
};

export default Footer;
