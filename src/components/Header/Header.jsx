import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>IT Consulting Firm</h1>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a className={styles.navLink} href="#about">About Us</a></li>
            <li className={styles.navItem}><a className={styles.navLink} href="#services">Services</a></li>
            <li className={styles.navItem}><a className={styles.navLink} href="#why-choose-us">Why Choose Us</a></li>
            <li className={styles.navItem}><a className={styles.navLink} href="#how-it-works">How It Works</a></li>
            <li className={styles.navItem}><a className={styles.navLink} href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
