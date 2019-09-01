import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <span>Home</span>
        <span>About</span>
        <span>Contact us</span>
      </nav>
    </div>
    <span className={styles.copyright}>@ Copyright 2019</span>
  </div>
);

export default Footer;
