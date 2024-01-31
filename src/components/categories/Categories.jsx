import CategoryCard from '../categoryCard/CategoryCard';
import vivero_vertical_4 from './images/vivero_vertical_4.jpg';
import vivero_vertical_3 from './images/vivero_vertical_3.jpg';
import vivero_vertical_6 from './images/vivero_vertical_6.jpg';
import vivero_vertical_7 from './images/vivero_vertical_7.jpg';
import vivero_vertical_8 from './images/vivero_vertical_8.jpg';
import vivero_vertical_10 from './images/vivero_vertical_10.jpg';
import styles from './categories.module.css';

const Categories = () => {

    const categories = [
        {title: 'Plantines', image: vivero_vertical_10}, 
        {title: 'Interior', image: vivero_vertical_4},
        {title: 'Exterior', image: vivero_vertical_8},
        {title: 'Arreglos', image: vivero_vertical_7},
        {title: 'Arbustos', image: vivero_vertical_3},
        {title: 'Accesorios', image: vivero_vertical_6}];

    return (
        <div className={styles.div}>
            {categories.map((category) => (
                <CategoryCard key={category.title} category={category}/>
            ))}
        </div>
    )
}

export default Categories;