import { useLocation } from "react-router";
import styles from "../css/footer.module.css";
import { useNavigate } from "react-router-dom";
import { setEmailError, setNameError, setPhoneError } from "../state";
import validateForm from "../utils/validateForm";
import { connect } from "react-redux";

const Footer = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { creds, setEmailError, setNameError, setPhoneError } = props;

    const handleOnClick = (e) => {
        e.preventDefault();

        switch (location.pathname) {
            case "/":
                if (
                    validateForm(
                        creds,
                        setNameError,
                        setEmailError,
                        setPhoneError
                    )
                ) {
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
                navigate("/thank-you");
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

    return location.pathname === "/thank-you" ? (
        ""
    ) : (
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
