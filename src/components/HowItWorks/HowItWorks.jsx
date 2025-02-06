import React from 'react'
import styles from "./HowItWorks.module.css"

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>How It Works</h2>
        <ol className={styles.stepsList}>
          <li>Initial Consultation: We understand your needs and goals.</li>
          <li>Strategy Development: We create a tailored strategy that fits your business.</li>
          <li>Implementation: Our team executes the plan with the highest standards.</li>
          <li>Support & Maintenance: We provide ongoing support to ensure success.</li>
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks