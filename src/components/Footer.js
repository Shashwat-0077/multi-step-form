import { useLocation } from "react-router";
import styles from "../css/footer.module.css";
import { useNavigate } from "react-router-dom";
import { setEmailError, setNameError, setPhoneError } from "../state";
import { connect } from "react-redux";
import { useState } from "react";

const Footer = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { creds, setEmailError, setNameError, setPhoneError } = props;

    const validateForm = () => {
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

        return !doesErrorOccured;
    };

    const handleOnClick = (e) => {
        e.preventDefault();

        switch (location.pathname) {
            case "/":
                if (validateForm()) {
                    navigate("/select-plan");
                }
                break;

            case "/select-plan":
                navigate("/add-ons");
                break;

            case "/add-ons":
                navigate("/finishing-up");
                break;

            case "/finishing-up":
                if (!validateForm()) {
                    navigate("/");
                }
                break;

            default:
                break;
        }
    };

    const handleGoBack = (e) => {
        e.preventDefault();

        switch (location.pathname) {
            case "/select-plan":
                navigate("/");
                break;

            case "/add-ons":
                navigate("/select-plan");
                break;

            case "/finishing-up":
                navigate("/add-ons");
                break;

            default:
                break;
        }
    };

    return (
        <footer className={styles.footer}>
            <button
                onClick={handleGoBack}
                className={`${styles.goBack} ${
                    location.pathname === "/" ? styles.hide : ""
                }`}
            >
                Go Back
            </button>
            <button
                className={`${styles.nextBtn} ${
                    location.pathname === "/finishing-up" ? styles.last : ""
                }`}
                onClick={handleOnClick}
            >
                {location.pathname === "/finishing-up"
                    ? "Confirm"
                    : "Next Step"}
            </button>
        </footer>
    );
};

const mapStateToProps = (state) => {
    return {
        creds: state.creds,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setNameError: (error) => dispatch(setNameError(error)),
        setEmailError: (error) => dispatch(setEmailError(error)),
        setPhoneError: (error) => dispatch(setPhoneError(error)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
