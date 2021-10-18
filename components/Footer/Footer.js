import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.container}>
      <section className={styles.first}>
        <p className={styles.head}>Quick Links</p>
        <div className={styles.listDiv}>Home</div>
        <div className={styles.listDiv}>Contact Us Us</div>
      </section>
    </section>
  );
};

export default Footer;
