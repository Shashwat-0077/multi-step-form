import { connect } from "react-redux";
import { setPlan, setPlanPeriod } from "../state";

//styles
import styles from "../css/planPanel.module.css";

//svgs
import advancedSVG from "../assets/images/icon-advanced.svg";
import arcadeSVG from "../assets/images/icon-arcade.svg";
import proSVG from "../assets/images/icon-pro.svg";

const PlanPanel = (props) => {
    const { plan, setPlan, setPlanPeriod } = props;
    const { type, period } = plan;

    return (
        <div>
            <div className={styles.main}>
                <h1>Select your plan</h1>
                <p className={styles.description}>
                    You have the option of monthly or yearly blling
                </p>

                <div
                    className={`${styles.planSelector} ${
                        !period ? styles.expand : ""
                    }`}
                >
                    <div
                        className={type === "arcade" ? styles.selected : ""}
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
                                ${period ? "9" : "90"}/{period ? "mo" : "yr"}
                            </p>
                            <p
                                className={`${
                                    !period ? styles.free : styles.hide
                                }`}
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                    <div
                        className={type === "advanced" ? styles.selected : ""}
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
                                ${period ? "12" : "120"}/{period ? "mo" : "yr"}
                            </p>
                            <p
                                className={`${styles.free} ${
                                    period ? styles.hide : ""
                                }`}
                            >
                                2 months free
                            </p>
                        </div>
                    </div>
                    <div
                        className={type === "pro" ? styles.selected : ""}
                        onClick={() => setPlan("pro")}
                    >
                        <img src={proSVG} alt="" className={styles.image} />
                        <div>
                            <p className={styles.heading}>Pro</p>
                            <p className={styles.price}>
                                ${period ? "15" : "150"}/{period ? "mo" : "yr"}
                            </p>
                            <p
                                className={`${
                                    !period ? styles.free : styles.hide
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
                            checked={!period}
                            onChange={() => setPlanPeriod(!period)}
                        />
                        <span className={styles.slider}></span>
                    </label>
                    <p>Yearly</p>
                </div>
            </div>
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
        setPlanPeriod: (planPeriod) => dispatch(setPlanPeriod(planPeriod)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanPanel);
