import styles from "../css/addOns.module.css";

import {
    setLargerStorage,
    setOnlineService,
    setCustProfile,
} from "../state/addons/actionCreaters";
import { connect } from "react-redux";

const AddOns = (props) => {
    const ONLINE_SERVICE = "ONLINE_SERVICE";
    const LARGER_STORAGE = "LARGER_STORAGE";
    const CUST_PROFILE = "CUST_PROFILE";

    const {
        addOns,
        setOnlineService,
        setLargerStorage,
        setCustProfile,
        planPeriod,
    } = props;

    const handleOnClick = (e) => {
        switch (e.target.id) {
            case ONLINE_SERVICE:
                setOnlineService(!addOns.online_service);
                break;
            case LARGER_STORAGE:
                setLargerStorage(!addOns.larger_storage);
                break;
            case CUST_PROFILE:
                setCustProfile(!addOns.cust_profile);
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <div className={styles.main}>
                <h1>Pick add-ons</h1>
                <p className={styles.description}>
                    Add-ons helps enchance your gaming experience
                </p>

                <div className={styles.addOns}>
                    <button
                        className={`${styles.addOn} ${
                            addOns.online_service ? styles.active : ""
                        }`}
                        id={ONLINE_SERVICE}
                        onClick={handleOnClick}
                    >
                        <div className={styles.checkBox}>
                            <div>
                                <i className="fa-solid fa-check"></i>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.heading}>Online service</p>
                            <p className={styles.desc}>
                                Access to multiplayer games
                            </p>
                        </div>
                        <div className={styles.price}>
                            <p>{planPeriod ? "+1/mo" : "+10/yr"}</p>
                        </div>
                    </button>
                    <button
                        className={`${styles.addOn} ${
                            addOns.larger_storage ? styles.active : ""
                        }`}
                        id={LARGER_STORAGE}
                        onClick={handleOnClick}
                    >
                        <div className={styles.checkBox}>
                            <div>
                                <i className="fa-solid fa-check"></i>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.heading}>Larger Storage</p>
                            <p className={styles.desc}>
                                Extra 1TB of cloud save
                            </p>
                        </div>
                        <div className={styles.price}>
                            <p>{planPeriod ? "+2/mo" : "+20/yr"}</p>
                        </div>
                    </button>
                    <button
                        className={`${styles.addOn} ${
                            addOns.cust_profile ? styles.active : ""
                        }`}
                        id={CUST_PROFILE}
                        onClick={handleOnClick}
                    >
                        <div className={styles.checkBox}>
                            <div>
                                <i className="fa-solid fa-check"></i>
                            </div>
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
                            <p>{planPeriod ? "+2/mo" : "+20/yr"}</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        addOns: state.addOns,
        planPeriod: state.plan.period,
    };
};

const mapDispatchToPorps = (dispatch) => {
    return {
        setOnlineService: (inp) => dispatch(setOnlineService(inp)),
        setLargerStorage: (inp) => dispatch(setLargerStorage(inp)),
        setCustProfile: (inp) => dispatch(setCustProfile(inp)),
    };
};

export default connect(mapStateToProps, mapDispatchToPorps)(AddOns);
