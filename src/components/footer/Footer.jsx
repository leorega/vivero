import styles from './footer.module.css';

const Footer = () => {

    const leorega = '>>LeoRega<<';

    return (
        <div className={styles.div}>
            <div className={styles.content}>
                <h3 className={styles.title}>Vivero Las Hadas</h3>
                <div className={styles.data}>
                    <p>Dirección: Colinas Verdes</p> |
                    <p>Teléfono: +54 9 223 474-8774</p> | 
                    <p>Email: viverolashadas@gmail.com</p>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/leorega/" className={styles.link} target='blank'>Diseño y desarrollo: {leorega}</a>
        </div>
    )
}

export default Footer;