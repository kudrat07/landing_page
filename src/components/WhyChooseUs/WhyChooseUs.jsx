import React from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Why Choose Us?</h2>
        <p className={styles.text}>
          Our team of experts has years of experience in IT consulting. We focus on delivering solutions tailored to your business's needs, ensuring efficiency, scalability, and security. Our collaborative approach helps businesses stay ahead of the competition in a fast-paced digital world.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
