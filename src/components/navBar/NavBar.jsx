import ButtonsBar from '../buttonsBar/ButtonsBar';
import { useNavigate } from 'react-router-dom';
import styles from './navBar.module.css';

const NavBar = () => {

    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/');
    };

    return (
        <nav className={styles.nav}>
            <h1 className={styles.title} onClick={navigateHandler}>Vivero Las Hadas</h1>
            <ButtonsBar/>
        </nav>
    )
}

export default NavBar;