import styles from "./categoryCard.module.css";
import { useNavigate } from "react-router-dom";

const CategoryCard = (props) => {
    const { category } = props;

    const navigate = useNavigate();

    const handleNavigate = (category) => {
        navigate(`/products/${category}`);
    };

    return (
        <div className={styles.div}>
            <img
                className={styles.img}
                src={category.image.url}
                alt={category.name}
                onClick={() => handleNavigate(category.name)}
            />
            <h3
                className={styles.title}
                onClick={() => handleNavigate(category.name)}
            >
                {category.name}
            </h3>
        </div>
    );
};

export default CategoryCard;
