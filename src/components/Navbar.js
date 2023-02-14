import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";

// TODO : Form validation

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className={styles.nav}>
            <Link
                to={"/multi-step-form"}
                className={`${styles.nav_item} ${
                    path === "/multi-step-form" ? styles.active : ""
                }`}
            >
                1
            </Link>
            <Link
                to={"/select-plan"}
                className={`${styles.nav_item} ${
                    path === "/select-plan" ? styles.active : ""
                }`}
            >
                2
            </Link>
            <Link
                to={"/add-ons"}
                className={`${styles.nav_item} ${
                    path === "/add-ons" ? styles.active : ""
                }`}
            >
                3
            </Link>
            <Link
                to={"/finishing-up"}
                className={`${styles.nav_item} ${
                    path === "/finishing-up" || path === "/thank-you"
                        ? styles.active
                        : ""
                }`}
            >
                4
            </Link>
        </div>
    );
};

export default Navbar;
