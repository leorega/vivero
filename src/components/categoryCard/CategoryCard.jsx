import styles from "./categoryCard.module.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = (props) => {
    const { categoryName } = props;

    const navigate = useNavigate();

    const handleNavigate = (title) => {
        navigate(`/products/${title}`);
    };

    return (
        <div className={styles.div}>
            <img
                className={styles.img}
                src={""}
                alt={categoryName}
                onClick={() => handleNavigate(categoryName)}
            />
            <h3
                className={styles.title}
                onClick={() => handleNavigate(categoryName)}
            >
                {categoryName}
            </h3>
        </div>
    );
};

export default CategoryCard;
