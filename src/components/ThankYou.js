import styles from "../css/thankyou.module.css";
import { ReactComponent as ThankYouSVG } from "../assets/images/icon-thank-you.svg";
import validateForm from "../utils/validateForm";
import { useNavigate } from "react-router";
import { setEmailError, setNameError, setPhoneError } from "../state";
import { connect } from "react-redux";
import { useEffect } from "react";

const ThankYou = (props) => {
    const navigate = useNavigate();
    const { creds, setNameError, setEmailError, setPhoneError } = props;

    useEffect(() => {
        if (!validateForm(creds, setNameError, setEmailError, setPhoneError)) {
            navigate("/multi-step-form");
        }
    });

    return (
        <div>
            <div className={styles.main}>
                <ThankYouSVG className={styles.svg} />
                <h1>Thank you!</h1>
                <p className={styles.text}>
                    Thanks for confirming you subscription! We hope you have fun
                    using our platform. If you ever need support, please feel
                    free to email us at support@loremgaming.com.
                </p>
            </div>
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
        setNameError: (error) => dispatch(setNameError(error)),
        setEmailError: (error) => dispatch(setEmailError(error)),
        setPhoneError: (error) => dispatch(setPhoneError(error)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);
