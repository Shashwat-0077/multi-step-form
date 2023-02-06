import { Route, Routes } from "react-router";
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
            </Routes>
        </div>
    );
}

export default App;
