import React, { useEffect } from 'react';
import styles from './Nav2.module.css';
import logo from '../assets/logo1.svg';

const Nav2 = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementsByClassName(styles.Navbar)[0];
      if (window.scrollY > 50) {
        navbar.classList.add(styles.scrolled);
      } else {
        navbar.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.Navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.navList}>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About Us</li>
      </ul>
      <div className={styles.navRight}>
        <li>Login</li>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Nav2;
