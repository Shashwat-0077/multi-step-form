import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../css/finishingUp.module.css";
import captalize from "../utils/capitalize";

const FinishingUp = (props) => {
    const { plan, addOns } = props;
    const multipler = plan.period ? 1 : 10;

    const price = {
        plan: "--",
        addOns: 0,
    };

    if (plan.type === "arcade") {
        price.plan = 9 * multipler;
    } else if (plan.type === "advanced") {
        price.plan = 12 * multipler;
    } else if (plan.type === "pro") {
        price.plan = 15 * multipler;
    }

    if (addOns.online_service) {
        price.addOns += 1 * multipler;
    }
    if (addOns.larger_storage) {
        price.addOns += 2 * multipler;
    }
    if (addOns.cust_profile) {
        price.addOns += 2 * multipler;
    }

    return (
        <div>
            <div className={`${styles.main}`}>
                <h1>Finishing Up</h1>
                <p className={styles.description}>
                    Double-check everthing looks OK before confirming.
                </p>

                <div className={styles.planAndAddOns}>
                    <div className={styles.plan}>
                        <div className={styles.details}>
                            <p>
                                {!plan.type
                                    ? "--(--)"
                                    : `${captalize(plan.type)} (${
                                          plan.period ? "Monthly" : "Yearly"
                                      })`}
                            </p>
                            <Link to="/select-plan" className={styles.link}>
                                {!plan.type ? "Select" : "Change"}
                            </Link>
                        </div>

                        <div className={styles.price}>
                            ${price.plan}/{plan.period ? "mo" : "yr"}
                        </div>
                    </div>

                    {addOns.online_service ||
                    addOns.larger_storage ||
                    addOns.cust_profile ? (
                        <hr className={styles.bar} />
                    ) : (
                        ""
                    )}

                    <div className={styles.addOns}>
                        {addOns.online_service ? (
                            <div>
                                <p className={styles.addOn}>Online Service</p>
                                <p className={styles.price}>
                                    +${1 * multipler}/
                                    {plan.period ? "mo" : "yr"}
                                </p>
                            </div>
                        ) : null}

                        {addOns.larger_storage ? (
                            <div>
                                <p className={styles.addOn}>Larger Storage</p>
                                <p className={styles.price}>
                                    +${2 * multipler}/
                                    {plan.period ? "mo" : "yr"}
                                </p>
                            </div>
                        ) : null}

                        {addOns.cust_profile ? (
                            <div>
                                <p className={styles.addOn}>
                                    Customizable Profile
                                </p>
                                <p className={styles.price}>
                                    +${2 * multipler}/
                                    {plan.period ? "mo" : "yr"}
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className={styles.total}>
                    <p className={styles.total_tag}>
                        Total (per {plan.period ? "month" : "year"})
                    </p>
                    <p className={styles.price}>
                        ${price.plan + price.addOns}/{plan.period ? "mo" : "yr"}
                    </p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        plan: state.plan,
        addOns: state.addOns,
    };
};

export default connect(mapStateToProps)(FinishingUp);
