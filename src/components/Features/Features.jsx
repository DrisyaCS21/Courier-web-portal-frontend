import styles from './Features.module.css'

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <i className="fas fa-truck-fast"></i>
            <h3>Fast Delivery</h3>
            <p>We guarantee timely delivery with real-time tracking for all your packages.</p>
          </div>
          <div className={styles.featureCard}>
            <i className="fas fa-shield-alt"></i>
            <h3>Secure Handling</h3>
            <p>Your packages are handled with utmost care and security throughout the journey.</p>
          </div>
          <div className={styles.featureCard}>
            <i className="fas fa-globe"></i>
            <h3>Nationwide Coverage</h3>
            <p>We deliver to all major cities and towns across the country with reliable service.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features