import styles from "./IntroPart.module.css";
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
          We work side-by-side with our partners at every stage of growth to
          venture into new areas, reimagine existing offerings, and develop
          cultures that thrive
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
          We focus on understanding your brand, audience and business objectives
          to inform a digital strategy that is geared toward success.
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
          One of our main focus is to make sure we are delivering content that
          people and our customers love, That is our primary priorty.
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
          We’re honest folk that believe in hard work and building lasting
          relationships. We enjoy making companies look better with great design
          and go the extra mile to provide a service that we would like to
          experience ourselves..
        </div>
      </section>
    </section>
  );
};

export default IntroPart;
