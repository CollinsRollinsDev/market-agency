import styles from './Offers.module.css';
import Image from "next/image";


const Offers = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.head}>Our Services and Offers</h1>
            <section className={styles.cover}>
                <div className={styles.texts}>
                    Facebook Analytics
                </div>
                <div className={styles.imgBk}>
                <Image
                    src="/fb.svg"
                    alt="Picture of the author"
                    // width={500}
                    // height={500}
                    layout="fill"
        />
                </div>
            </section>

            <section className={styles.cover}>
                <div className={styles.texts}>
                    We grow Businesses
                </div>
                <div className={styles.imgBk}>
                <Image
                    src="/business.svg"
                    alt="Picture of the author"
                    // width={500}
                    // height={500}
                    layout="fill"
        />
                </div>
            </section>

            <section className={styles.cover}>
                <div className={styles.texts}>
                    Your content to the world
                </div>
                <div className={styles.imgBk}>
                <Image
                    src="/broadcast.svg"
                    alt="Picture of the author"
                    // width={500}
                    // height={500}
                    layout="fill"
        />
                </div>
            </section>

            <section className={styles.cover}>
                <div className={styles.texts}>
                    Get You Recognized
                </div>
                <div className={styles.imgBk}>
                <Image
                    src="/share.svg"
                    alt="Picture of the author"
                    // width={500}
                    // height={500}
                    layout="fill"
        />
                </div>
            </section>
        </section>
    )
}

export default Offers
