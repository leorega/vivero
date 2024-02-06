import styles from "./maps.module.css";

const Maps = () => {
    return (
        <div className={styles.div}>
            <h3>Donde estamos:</h3>
            <iframe
                title="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1894.6260716897696!2d-57.82007618590814!3d-37.895362387242876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95852d4f3f1fa0f1%3A0x43be88007bf839a5!2sVivero%20las%20hadas!5e0!3m2!1ses!2sar!4v1691086485373!5m2!1ses!2sar"
                width="80%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Maps;
