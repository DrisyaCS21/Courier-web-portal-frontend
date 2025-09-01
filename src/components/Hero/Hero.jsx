import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>Fast & Reliable Courier Services</h1>
        <p>Delivering your packages with care and precision. Across town or across the country, we've got you covered.</p>
        <div className={styles.heroButtons}>
          <button className="btn btn-primary">Track Package</button>
          <button className="btn btn-outline" onClick={() => window.location.href = '/register'}>Sign Up Now</button>
        </div>
      </div>
    </section>
  )
}

export default Hero