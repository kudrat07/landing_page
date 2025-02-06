import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>&copy; 2025 IT Consulting Firm. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
