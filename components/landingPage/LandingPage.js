import Footer from '../Footer/Footer';
import Header from './Header';
import IntroPart from './IntroPart';
import styles from './LandingPage.module.css';
import Offers from './Offers';
import Prebody from './Prebody';

const LandingPage = () => {
    return (
        <section className={styles.home}>
            <Header />
            <Prebody />
            <IntroPart />
            <Offers />
            <Footer />
        </section>
    )
}

export default LandingPage
