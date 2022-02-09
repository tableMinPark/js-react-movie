import propTypes from "prop-types";
import styles from "./Button.module.css";   // css파일은 [*.module.css] 형식을 지켜야한다.

function Button({ text }){
    return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
    text: propTypes.string.isRequired,
}

export default Button;