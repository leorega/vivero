import styles from "./socialBar.module.css";
import logo_whatsapp from "./logo_whatsapp.png";
import logo_facebook from "./logo_facebook.png";
import logo_insta from "./logo_insta.png";

const SocialBar = () => {
  return (
    <div className={styles.div}>
      <a
        title="Whatsapp"
        href="https://web.whatsapp.com/"
        target="_blank"
        rel="noreferrer"
        className={styles.button_w}
      >
        <img src={logo_whatsapp} alt="Whatsapp" />
      </a>
      <a
        title="Instagram"
        href="https://www.instagram.com/vivero_de_las_hadas"
        target="_blank"
        rel="noreferrer"
        className={styles.button_i}
      >
        <img src={logo_insta} alt="Instagram" />
      </a>
      <a
        title="Facebook"
        href="https://es-la.facebook.com/"
        target="_blank"
        rel="noreferrer"
        className={styles.button_f}
      >
        <img src={logo_facebook} alt="Facebook" />
      </a>
    </div>
  );
};

export default SocialBar;
