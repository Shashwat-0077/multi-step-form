import styles from "../css/personalInfo.module.css";
import footerStyles from "../css/footer.module.css";

const PersonalInfo = () => {
    return (
        <div>
            <div className={`${styles.main}`}>
                <h1>Personal info</h1>
                <p>
                    Please provide your name, email, address, and phone number.
                </p>

                <form>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="eg. Stephen king"
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                    />

                    <label htmlFor="phNo">Phone Number</label>
                    <input
                        type="text"
                        name="phNo"
                        id="phNo"
                        placeholder="e.g. +1 234 567 890"
                    />
                </form>
            </div>
            <footer
                className={`${footerStyles.footer} ${footerStyles.shiftRight}`}
            >
                <button>Next Step</button>
            </footer>
        </div>
    );
};

export default PersonalInfo;
