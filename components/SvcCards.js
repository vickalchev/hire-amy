import styles from '../styles/Home.module.css';
import Image from 'next/image';

const SvcCards = () => {
    return (
        <div className={styles.svcCardsContainer}>
            <Image
                className={styles.graphicDesignCard} 
                src='/Graphic-Design-Card.svg'
                width={354}
                height={364}
                alt='Graphic Design Card'
            />
            <Image
                className={styles.uxUiCard}
                src='/UI-UX-Card.svg'
                width={164}
                height={182}
                alt='UI/UX Card'  
            />
            <Image
                className={styles.appsCard} 
                src='/Apps-Card.svg'
                width={164}
                height={182}
                alt='Apps Card'
            />
            <Image 
                className={styles.photographyCard}
                src='/Photography-Card.svg'
                width={343}
                height={182}
                alt='Photography Card'
            />
            <Image
                className={styles.illustrationsCard}
                src='/Illustrations-Card.svg'
                width={343}
                height={158}
                alt='Illustrations Card'
            />
            <Image
                className={styles.motionGraphicsCard} 
                src='/Motion-Graphics-Card.svg'
                width={343}
                height={182}
                alt='Motion Graphics-Card.svg'
            />

        </div>
    )
}

export default SvcCards; 