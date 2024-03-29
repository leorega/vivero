import CategoryCard from "../categoryCard/CategoryCard";
import { useQuery, gql } from "@apollo/client";
import styles from "./categories.module.css";

const Categories = () => {
    const { loading, data } = useQuery(gql`
        query ALL_CATEGORIES {
            allCategories {
                id
                name
                image {
                    url
                }
            }
        }
    `);

    return (
        <div className={styles.div}>
            {loading ? <h3>Cargando...</h3> : " "}
            {data &&
                data.allCategories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
        </div>
    );
};

export default Categories;
