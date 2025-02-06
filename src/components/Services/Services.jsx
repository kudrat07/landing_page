import React, { useEffect, useState } from "react";
import styles from "./Services.module.css";
import toast from "react-hot-toast";
const url =
  "https://script.google.com/macros/s/AKfycbxZB3F9DFAeku8-n32GfwkF25BjjYqRG84X06qfZdHXUZ2PX57mcF7Un0QhMahG48YHXw/exec";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
 
  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      if(!response.ok) {
        toast.error("Something went wrong while fetching data")
        return
      }
        setServicesData(data)
        console.log(servicesData)
    } catch (error) {
      toast.error(error)
    }
  };
  useEffect(() => {
    fetchData();
  },[])
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        <div className={styles.servicesList}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.service}>
              <h3 className={styles.serviceTitle}>{service.Title}</h3>
              <p className={styles.serviceDesc}>{service.Content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
