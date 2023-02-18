import { Route, Routes, useLocation } from "react-router";
import AddOns from "./components/AddOns";
import FinishingUp from "./components/FinishingUp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/PersonalInfo";
import PlanPanel from "./components/PlanPanel";
import ThankYou from "./components/ThankYou";
import styles from "./css/app.module.css";

function App() {
    const location = useLocation();

    return (
        <div id={styles.App}>
            <Navbar />
            <div
                className={styles.contentAndFooter}
                // cant find a way to do this in another way
                style={
                    location.pathname === "/thank-you"
                        ? {
                              justifyContent: "center",
                          }
                        : {}
                }
            >
                <Routes>
                    <Route
                        exact
                        path="/multi-step-form"
                        element={<PersonalInfo />}
                    />
                    <Route exact path="/select-plan" element={<PlanPanel />} />
                    <Route exact path="/add-ons" element={<AddOns />} />
                    <Route
                        exact
                        path="/finishing-up"
                        element={<FinishingUp />}
                    />
                    <Route exact path="/thank-you" element={<ThankYou />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;
