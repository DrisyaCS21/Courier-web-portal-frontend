// components/Features/Features.jsx
import React from 'react';
import styles from './Features.module.css';

const Features = () => {
  const features = [
    {
      title: 'Smooth Order Processing',
      description: 'We ensure your customer orders are processed quickly and accurately. Our inventory management keeps your stock levels in check, preventing shortages.'
    },
    {
      title: 'Tech-Driven Efficiency',
      description: 'We integrate with your e-commerce platform for seamless order handling. Smart technology optimizes delivery routes for efficiency.'
    },
    {
      title: 'Reliable Last-Mile Delivery',
      description: 'Count on us for dependable last-mile delivery, getting your products to customers on time. Real-time tracking keeps everyone in the loop about delivery status.'
    },
    {
      title: 'Flexible and Scalable',
      description: 'We grow with you. Our logistics solutions are flexible and adapt to your business growth. Flexible services adjust to seasonal changes and promotions.'
    },
    {
      title: 'Customer-Friendly Service',
      description: 'Our personalized customer service handles inquiries and returns with ease. Let your customers choose delivery times and preferences for a tailored experience.'
    },
    {
      title: 'Join Us',
      description: 'You can book the goods yourself from the comfort of your office, business or home through the online service and our rider can pick up the goods from the door.'
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>Discover the features that make our courier service stand out</p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;