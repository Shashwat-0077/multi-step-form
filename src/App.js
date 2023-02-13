import { Route, Routes } from "react-router";
import AddOns from "./components/AddOns";
import FinishingUp from "./components/FinishingUp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/PersonalInfo";
import PlanPanel from "./components/PlanPanel";
import styles from "./css/app.module.css";

function App() {
    return (
        <div id={styles.App}>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<PersonalInfo />} />
                <Route exact path="/select-plan" element={<PlanPanel />} />
                <Route exact path="/add-ons" element={<AddOns />} />
                <Route exact path="/finishing-up" element={<FinishingUp />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
