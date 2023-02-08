import styles from "../css/personalInfo.module.css";
import footerStyles from "../css/footer.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { setEmail, setName, setPhone } from "../state/creds/actionCreaters";

const PersonalInfo = (props) => {
    const { creds, setName, setEmail, setPhone } = props;

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        switch (e.target.name) {
            case "name":
                setNameError("");
                setName(e.target.value);
                break;
            case "email":
                setEmailError("");
                setEmail(e.target.value);
                break;
            case "phone":
                setPhoneError("");
                setPhone(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let doesErrorOccured = false;

        const emailRegEx =
            /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const phoneRegEx = /^[0-9]{10}$/;
        const nameRegEx = /^[a-zA-Z ]+$/;

        const { name, email, phone } = creds;

        if (!name) {
            setNameError("This feild is required");
            doesErrorOccured = true;
        } else if (!nameRegEx.test(name)) {
            setNameError("Invalid Input");
            doesErrorOccured = true;
        }

        if (!email) {
            setEmailError("This feild is required");
            doesErrorOccured = true;
        } else if (!emailRegEx.test(email)) {
            setEmailError("Invalid Input");
            doesErrorOccured = true;
        }

        if (!phone) {
            setPhoneError("This feild is required");
            doesErrorOccured = true;
        } else if (!phoneRegEx.test(phone)) {
            setPhoneError("Invalid Input");
            doesErrorOccured = true;
        }

        if (!doesErrorOccured) {
            navigate("/select-plan");
        }
    };

    return (
        <div>
            <div className={`${styles.main}`}>
                <h1>Personal info</h1>
                <p>
                    Please provide your name, email, address, and phone number.
                </p>

                <form>
                    <div className={styles.messages}>
                        <label htmlFor="name">Name</label>
                        <p className={styles.error}>{nameError}</p>
                    </div>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="eg. Stephen king"
                        onChange={handleOnChange}
                        value={creds.name}
                        className={nameError ? styles.invalidInput : ""}
                    />

                    <div className={styles.messages}>
                        <label htmlFor="email">Email Address</label>
                        <p className={styles.error}>{emailError}</p>
                    </div>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                        onChange={handleOnChange}
                        value={creds.email}
                        className={emailError ? styles.invalidInput : ""}
                    />

                    <div className={styles.messages}>
                        <label htmlFor="phone">Phone Number</label>
                        <p className={styles.error}>{phoneError}</p>
                    </div>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                        onChange={handleOnChange}
                        value={creds.phone}
                        className={phoneError ? styles.invalidInput : ""}
                    />
                </form>
            </div>
            <footer
                className={`${footerStyles.footer} ${footerStyles.shiftRight}`}
            >
                <button onClick={handleOnSubmit}>Next Step</button>
            </footer>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        creds: state.creds,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch(setName(name)),
        setEmail: (email) => dispatch(setEmail(email)),
        setPhone: (phone) => dispatch(setPhone(phone)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
