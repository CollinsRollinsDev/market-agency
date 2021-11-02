import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.container}>
      <section className={styles.first}>
        <p className={styles.head}>Quick Links</p>
        <div className={styles.listDiv}>Home</div>
        <div className={styles.listDiv}>Wanna Contact us via phone? <a href="tel:+9207868519"> Click here</a></div>
        <div className={styles.listDiv}>Wanna Contact us via email? <a href = "mailto:florinastrong162@gmail.com"> Click here</a> </div>
      </section>
    </section>
  );
};

export default Footer;

