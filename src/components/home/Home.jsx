import Categories from '../categories/Categories';
import MainCover from '../mainCover/MainCover';
import Maps from '../maps/Maps';
import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.div}>
            <MainCover/>
            <Categories/>
            <Maps/>
        </div>
    )
}

export default Home;