import styles from "./buttonsBar.module.css";

const ButtonsBar = () => {
    const url = window.location.href;

    const principalUrl = (
        <a className={styles.button} href="/">
            Principal
        </a>
    );

    return (
        <nav className={styles.nav}>
            {url === "http://localhost:3000/about" ? (
                <>{principalUrl}</>
            ) : (
                <a className={styles.button} href="/about">
                    Quienes somos
                </a>
            )}
            |
            {url === "http://localhost:3000/categories" ? (
                <>{principalUrl}</>
            ) : (
                <a className={styles.button} href="/categories">
                    Productos
                </a>
            )}
            |
            {url === "http://localhost:3000/contact" ? (
                <>{principalUrl}</>
            ) : (
                <a className={styles.button} href="/contact">
                    Contacto
                </a>
            )}
            |
            {url === "http://localhost:3000/cart" ? (
                <>{principalUrl}</>
            ) : (
                <a className={styles.button} href="/cart">
                    Carrito
                </a>
            )}
        </nav>
    );
};

export default ButtonsBar;
