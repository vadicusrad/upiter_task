import React from 'react';
import s from './Header.module.scss';
import { logo } from '../../icons/logo';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header_menu}>
        <a src='/' className={s.header_logo}>
          {logo}
        </a>
        <div className={s.header_navbar}>
          <div className={s.header_navbar_item}>About</div>
          <div className={s.header_navbar_item}>Services</div>
          <div className={s.header_navbar_item}>Pricing</div>
          <div className={s.header_navbar_item}>Blog</div>
        </div>
        <div className={s.header_contact}>CONTACT</div>
      </div>

      <h1 className={s.header_title}>Portfolio</h1>
      <p className={s.header_subtitle}>
        Agency provides a full service range including technical skills, design,
        business understanding.
      </p>
    </header>
  );
};

export default Header;
