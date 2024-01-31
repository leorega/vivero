import styles from './categoryCard.module.css';
import { useNavigate } from 'react-router-dom';

const CategoryCard = (props) => {

    const {category} = props;

    const navigate = useNavigate();

    const handleNavigate = (title) => {
        navigate(`/products/${title}`)
    }

    return (
        <div className={styles.div}>
            <img 
                className={styles.img}
                src={category.image} 
                alt={category.title}
                onClick={()=>handleNavigate(category.title)}
            />
            <h3 className={styles.title} onClick={()=>handleNavigate(category.title)}>{category.title}</h3>
        </div>
    )
}

export default CategoryCard;