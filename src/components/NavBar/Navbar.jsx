import styles from './Navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
  return (
    <header>
      <nav className={styles.nav}>
        <Link to="/">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
