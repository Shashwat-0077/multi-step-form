import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setPlan } from "../state";

//styles
import styles from "../css/planPanel.module.css";
import footerStyles from "../css/footer.module.css";

//svgs
import advancedSVG from "../assets/images/icon-advanced.svg";
import arcadeSVG from "../assets/images/icon-arcade.svg";
import proSVG from "../assets/images/icon-pro.svg";

const PlanPanel = (props) => {
    // if monthly then true , if yearly then false
    const [planPeriod, setPlanPeriod] = useState(true);
    const { plan, setPlan } = props;

    return (
        <div>
            <div className={styles.main}>
                <h1>Select your plan</h1>
                <p className={styles.description}>
                    You have the option of monthly or yearly blling
                </p>

                <div
                    className={`${styles.planSelector} ${
                        !planPeriod ? styles.expand : ""
                    }`}
                >
                    <div
                        className={plan === "arcade" ? styles.selected : ""}
                        onClick={() => setPlan("arcade")}
                    >
                        <img
                            src={arcadeSVG}
                            alt="..."
                            className={styles.image}
                        />
                        <div>
                            <p className={styles.heading}>Arcade</p>
                            <p className={styles.price}>
                                ${planPeriod ? "9" : "90"}/
                                {planPeriod ? "mo" : "yr"}
                            </p>
                            <p
                                className={`${
                                    !planPeriod ? styles.free : styles.hide
                                }`}
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                    <div
                        className={plan === "advanced" ? styles.selected : ""}
                        onClick={() => setPlan("advanced")}
                    >
                        <img
                            src={advancedSVG}
                            alt=""
                            className={styles.image}
                        />
                        <div>
                            <p className={styles.heading}>Advanced</p>
                            <p className={styles.price}>
                                ${planPeriod ? "12" : "120"}/
                                {planPeriod ? "mo" : "yr"}
                            </p>
                            <p
                                className={`${styles.free} ${
                                    planPeriod ? styles.hide : ""
                                }`}
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                    <div
                        className={plan === "pro" ? styles.selected : ""}
                        onClick={() => setPlan("pro")}
                    >
                        <img src={proSVG} alt="" className={styles.image} />
                        <div>
                            <p className={styles.heading}>Pro</p>
                            <p className={styles.price}>
                                ${planPeriod ? "15" : "150"}/
                                {planPeriod ? "mo" : "yr"}
                            </p>
                            <p
                                className={`${
                                    !planPeriod ? styles.free : styles.hide
                                }`}
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.timeSpan}>
                    <p>Monthly</p>
                    <label className={styles.switchBtn}>
                        <input
                            type="checkbox"
                            name="planPeriod"
                            onChange={() => setPlanPeriod(!planPeriod)}
                        />
                        <span className={styles.slider}></span>
                    </label>
                    <p>Yearly</p>
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

const mapStateToProps = (state) => {
    return {
        plan: state.plan,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPlan: (plan) => dispatch(setPlan(plan)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanPanel);
