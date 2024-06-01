import styles from "./about.module.css";

const About = () => {
    return (
        <div className={styles.div}>
            <div className={styles.content}>
                <h2>Vivero Las Hadas</h2>
                <p>
                    Somos un vivero familiar que va progresando de a poco con
                    esfuezo y mucho amor.
                </p>
                <p>
                    Producimos plantines de estación. Tenemos plantas de
                    interior y exterior. Flores naturales. Flores secas.
                    Frutales. Arbustos para cerco. Arboles. Macetas. Tierra. No
                    dudes en consultarnos, estamos para ayudarte.
                </p>
            </div>
        </div>
    );
};

export default About;
