import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import toast from "react-hot-toast";

const url = "https://script.google.com/macros/s/AKfycbwkE74lMQM5TxiY66On29Carezg5orqqkAvQVpesJ0Qs5lCX-WZ8wiXHXkVV0kCufE/exec";

const ContactUs = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target; 
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new URLSearchParams(data).toString();
      const response = await fetch(`${url}?${formData}`, {
        method: "POST",
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setData({ Name: "", Email: "", Message: "" });
      } else {
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            name="Name"
            value={data.Name}
            className={styles.input}
            onChange={inputHandler}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            name="Email"
            value={data.Email}
            className={styles.input}
            onChange={inputHandler}
          />
          <textarea
            placeholder="Your Message"
            required
            name="Message"
            value={data.Message}
            className={styles.textarea}
            onChange={inputHandler}
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
