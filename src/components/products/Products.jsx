import { useParams } from "react-router";
//import styles from './products.module.css';

const Products = () => {
    const { title } = useParams();

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Products;
