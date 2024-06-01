import styles from "./mainCover.module.css";
import { useNavigate } from "react-router-dom";

const MainCover = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/about");
    };

    return (
        <div className={styles.div}>
            <button className={styles.button} onClick={navigateHandler}>
                Quienes Somos
            </button>
        </div>
    );
};

export default MainCover;
