import styles from './buttonsBar.module.css';

const ButtonsBar = () => {
    return (
        <div className={styles.nav}>
            <a className={styles.button} href='/about'>Quienes Somos</a> |
            <a className={styles.button} href='/categories'>Productos</a> |
            <a className={styles.button} href='/contact'>Contacto</a> |
            <a className={styles.button} href='/cart'>Carrito</a>
        </div>
    )
}

export default ButtonsBar;