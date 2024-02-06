import { useState } from "react";
import styles from "./contact.module.css";
//import { useNavigate } from 'react-router-dom';

const Contact = () => {
    //const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        coment: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className={styles.div}>
            <form
                action="https://formsubmit.co/leonardoregazzoni@gmail.com"
                method="POST"
                className={styles.form}
            >
                <label htmlFor="name"></label>
                <span>Nombre:</span>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    className={styles.input}
                    onChange={handleChange}
                    required
                />
                <input type="hidden" name="_captcha" value="false"></input>
                <label htmlFor="email"></label>
                <span>Email:</span>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    className={styles.input}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone"></label>
                <span>Teléfono:</span>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    className={styles.input}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="coment"></label>
                <span>Dejanos tu comentario/consulta:</span>
                <textarea
                    name="coment"
                    id="coment"
                    cols="30"
                    rows="10"
                    className={styles.textarea}
                    onChange={handleChange}
                    value={data.coment}
                    required
                ></textarea>
                <button type="submit" className={styles.button}>
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contact;
