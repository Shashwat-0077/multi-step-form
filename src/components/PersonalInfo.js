import styles from "../css/personalInfo.module.css";
import { connect } from "react-redux";

import {
    setEmail,
    setName,
    setPhone,
    setEmailError,
    setNameError,
    setPhoneError,
} from "../state";

const PersonalInfo = (props) => {
    const {
        creds,
        credsError,
        setName,
        setEmail,
        setPhone,
        setEmailError,
        setNameError,
        setPhoneError,
    } = props;
    const { nameError, emailError, phoneError } = credsError;

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

    return (
        <div>
            <div className={`${styles.main}`}>
                <h1>Personal info</h1>
                <p>
                    Please provide your name, email, address, and phone number.
                </p>

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
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        creds: state.creds,
        credsError: state.credsError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch(setName(name)),
        setEmail: (email) => dispatch(setEmail(email)),
        setPhone: (phone) => dispatch(setPhone(phone)),
        setNameError: (error) => dispatch(setNameError(error)),
        setEmailError: (error) => dispatch(setEmailError(error)),
        setPhoneError: (error) => dispatch(setPhoneError(error)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
