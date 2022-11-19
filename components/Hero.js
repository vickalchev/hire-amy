import styles from '../styles/Home.module.css';

const Hero = () => {
    return(
        <div>
            <h1 className={styles.h1}>
                Design solutions made easy
            </h1>
            <p className={styles.paragraph}>
                With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.
            </p>
        </div>
    )
}

export default Hero;