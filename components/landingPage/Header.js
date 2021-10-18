import styles from "./Header.module.css";
import Image from "next/image";
import {useState, useEffect} from 'react';

const Header = () => {
const [toggling, setToggling] = useState(false);

const handleClick = () => {
  !toggling ? setToggling(true) : setToggling(false)
}

const dropdown =  (
  <section className={styles.drop}>
  <div className={styles.dropHead}>Welcome,</div>
  <section className={styles.menuContainer}>
    <div>Home</div>
    <div>Contact Us</div>
  </section>
</section>
)


  return (
    <section className={styles.header}>
      <div className={styles.left}>
        <Image
          src="/logo2.jpg"
          alt="Picture of the author"
          // width={500}
          // height={500}
          layout="fill"
        />
      </div>
      <div className={styles.center}>Florinastrong</div>
      <div className={styles.right}>
        <svg onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </div>
      <div className={styles.desktopRight}>
        <div>Home</div>
        <div>Contact</div>
      </div>
        {
          toggling ? dropdown : null
        }
    </section>
  );
};

export default Header;
