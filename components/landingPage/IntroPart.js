import styles from './IntroPart.module.css'
import Image from "next/image";

const IntroPart = () => {
  return (
    <section className={styles.container}>
      <section className={styles.boxes}>
        <div className={styles.circled}>
        <Image
          src="/productivity.svg"
          alt="Picture of the author"
          // width={500}
          // height={500}
          layout="fill"
        />
        </div>
        <div className={styles.text}>
          We are a legalized digital company to drive out the marketting agency
          to place it all from the bla bla bla.
        </div>
      </section>
      <section className={styles.boxes}>
      <div className={styles.circled}>
      <Image
          src="/business.svg"
          alt="Picture of the author"
          width={90}
          height={90}
          layout="fill"
        />
      </div>
        <div className={styles.text}>
          We are a legalized digital company to drive out the marketting agency
          to place it all from the bla bla bla.
        </div>
      </section>
            <section className={styles.boxes}>
            <div className={styles.circled}>
            <Image
                src="/game.svg"
                alt="Picture of the author"
                width={90}
                height={90}
                layout="fill"
        />
            </div>
        <div className={styles.text}>
          We are a legalized digital company to drive out the marketting agency
          to place it all from the bla bla bla.
        </div>
            </section>
            <section className={styles.boxes}>
            <div className={styles.circled}>
            <Image
              src="/wallet.svg"
              alt="Picture of the author"
              width={90}
              height={90}
              layout="fill"
        />
            </div>
        <div className={styles.text}>
          We are a legalized digital company to drive out the marketting agency
          to place it all from the bla bla bla.
        </div>
            </section>
    </section>
  );
};

export default IntroPart;
