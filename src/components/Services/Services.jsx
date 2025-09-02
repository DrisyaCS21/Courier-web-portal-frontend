import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Express Freight Services',
      description: 'Time-sensitive deliveries with a commitment to swift and secure transportation. Nationwide coverage ensuring your cargo reaches its destination on time, every time.'
    },
    {
      icon: '📦',
      title: 'E-Commerce Logistics',
      description: 'Tailored services to meet the unique demands of the e-commerce industry. End-to-end logistics support from warehousing to last-mile delivery.'
    },
    {
      icon: '💰',
      title: 'Cash on Delivery Management',
      description: 'State-of-the-art system to manage cash on delivery (COD) with easy and timely processing for all your transactions.'
    },
    {
      icon: '🏭',
      title: 'Warehousing and Distribution',
      description: 'State-of-the-art warehouses equipped with advanced technology for efficient storage and distribution. Real-time inventory management for better control and visibility.'
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Our Premium Services</h2>
          <p>Comprehensive logistics solutions for your business needs</p>
        </div>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className={styles.learnMoreBtn}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;