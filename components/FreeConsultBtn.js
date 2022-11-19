import styles from '../styles/Home.module.css';
import Link from 'next/link';

const FreeConsultBtn = () => {
    return(
        <Link href='/'>
            <button className={styles.freeConsultBtn}>
                Free Consultation
            </button>
        </Link>

    )

}

export default FreeConsultBtn;