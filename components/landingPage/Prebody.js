import styles from './PreBody.module.css';
import Image from "next/image";


const Prebody = () => {
    return (
        
        <section className={styles.topLayout}>
            <div className={styles.bodyImage}></div>
            <div className={styles.leftSide}>
                <div className={styles.first}>
                    <div>
                        <p>Great Analysis</p>
                        <p>We provide the best</p>
                    </div>
                    <div>
                        <p>Better Statictics</p>
                        <p>We provide the best</p>
                    </div>
                    <div>
                        <p>Better Overview</p>
                        <p>No problem keeping tracks</p>
                    </div>
                </div>
                <div className={styles.second}>
                    SEO and DIGITAL MAFRKETING AGENCY
                </div>
                <div className={styles.third}>
                    <button className={styles.btn}>
                        Try For Free!
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.imgHolder}>
                <Image
                    src="/leftImg.svg"
                    alt="Picture of the author"
                    // width={500}
                    // height={500}
                    layout="fill"
                />
                </div>
            </div>
        </section>
    )
}

export default Prebody
