import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Us</h2>
        <p className={styles.text}>
          We are an innovative IT consulting firm focused on delivering
          cutting-edge technology solutions to help businesses grow. Our mission
          is to provide high-quality services that transform businesses and help
          them thrive in the digital age.
        </p>
      </div>
    </section>
  );
};

export default About;
