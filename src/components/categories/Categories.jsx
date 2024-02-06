import CategoryCard from "../categoryCard/CategoryCard";
import { useQuery, gql } from "@apollo/client";
import styles from "./categories.module.css";

const Categories = () => {
    const { loading, error, data } = useQuery(gql`
        query ALL_CATEGORIES {
            allCategories {
                name
                id
            }
        }
    `);

    console.log(data);

    if (error) throw new Error(error);

    return (
        <div className={styles.div}>
            {loading && <h3>Cargando...</h3>}
            {data.allCategories.map((category) => (
                <CategoryCard key={category.id} categoryName={category.name} />
            ))}
        </div>
    );
};

export default Categories;
