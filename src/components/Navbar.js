import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styles from "../css/navbar.module.css";

const Navbar = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className={styles.nav}>
            <div className={styles.nav_item}>
                <Link
                    to={"/multi-step-form"}
                    className={`${styles.link} ${
                        path === "/multi-step-form" ? styles.active : ""
                    }`}
                >
                    1
                </Link>
                <div className={styles.decription}>
                    <p className={styles.stepHeading}>STEP 1</p>
                    <p className={styles.stepInfo}>YOUR INFO</p>
                </div>
            </div>
            <div className={styles.nav_item}>
                <Link
                    to={"/select-plan"}
                    className={`${styles.link} ${
                        path === "/select-plan" ? styles.active : ""
                    }`}
                >
                    2
                </Link>
                <div className={styles.decription}>
                    <p className={styles.stepHeading}>STEP 2</p>
                    <p className={styles.stepInfo}>SELECT PLAN</p>
                </div>
            </div>
            <div className={styles.nav_item}>
                <Link
                    to={"/add-ons"}
                    className={`${styles.link} ${
                        path === "/add-ons" ? styles.active : ""
                    }`}
                >
                    3
                </Link>
                <div className={styles.decription}>
                    <p className={styles.stepHeading}>STEP 3</p>
                    <p className={styles.stepInfo}>ADD-ONS</p>
                </div>
            </div>
            <div className={styles.nav_item}>
                <Link
                    to={"/finishing-up"}
                    className={`${styles.link} ${
                        path === "/finishing-up" || path === "/thank-you"
                            ? styles.active
                            : ""
                    }`}
                >
                    4
                </Link>
                <div className={styles.decription}>
                    <p className={styles.stepHeading}>STEP 4</p>
                    <p className={styles.stepInfo}>SUMMARY</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
