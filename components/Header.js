import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import FreeConsultBtn from './FreeConsultBtn';

 const Header = () => {
    return (
    <div className={styles.header}>
        <Link
            href='/'
        >
            <Image 
                src='/amyIcon.svg'
                width={48}
                height={48}
                alt='Hire Amy Logo'
            />

            
        </Link>
        <FreeConsultBtn />
    </div>);

}

export default Header;