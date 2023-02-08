import styles from "../css/addOns.module.css";
import footerStyles from "../css/footer.module.css";
import { Link } from "react-router-dom";

const AddOns = () => {
    return (
        <div>
            <div className={styles.main}>
                <h1>Pick add-ons</h1>
                <p className={styles.description}>
                    Add-ons helps enchance your gaming experience
                </p>

                <div className={styles.addOns}>
                    <div className={styles.addOn}>
                        <div className={styles.checkBox}>
                            <label htmlFor="online-service">
                                <input
                                    type="checkbox"
                                    name="online-service"
                                    id="online-service"
                                />
                                <p>&#10003;</p>
                            </label>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.heading}>Online service</p>
                            <p className={styles.desc}>
                                Access to multiplayer games
                            </p>
                        </div>
                        <div className={styles.price}>
                            <p>+1/mo</p>
                        </div>
                    </div>
                    <div className={styles.addOn}>
                        <div className={styles.checkBox}>
                            <label htmlFor="larger-storage">
                                <input
                                    type="checkbox"
                                    name="larger-storage"
                                    id="larger-storage"
                                />
                                <p>&#10003;</p>
                            </label>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.heading}>Larger Storage</p>
                            <p className={styles.desc}>
                                Extra 1TB of cloud save
                            </p>
                        </div>
                        <div className={styles.price}>
                            <p>+2/mo</p>
                        </div>
                    </div>
                    <div className={styles.addOn}>
                        <div className={styles.checkBox}>
                            <label htmlFor="cust-profile">
                                <input
                                    type="checkbox"
                                    name="cust-profile"
                                    id="cust-profile"
                                />
                                <p>&#10003;</p>
                            </label>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.heading}>
                                Customizable profile
                            </p>
                            <p className={styles.desc}>
                                Custom theme on your profile
                            </p>
                        </div>
                        <div className={styles.price}>
                            <p>+2/mo</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={footerStyles.footer}>
                <Link className={footerStyles.goBack} to="/">
                    Go Back
                </Link>
                <button>Next Step</button>
            </footer>
        </div>
    );
};

export default AddOns;
