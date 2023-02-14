const validateForm = (creds, setNameError, setEmailError, setPhoneError) => {
    let doesErrorOccured = false;
    const emailRegEx =
        /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegEx = /^[0-9]{10}$/;
    const nameRegEx = /^[a-zA-Z ]+$/;

    if (!creds.name) {
        setNameError("This feild is required");
        doesErrorOccured = true;
    } else if (!nameRegEx.test(creds.name)) {
        setNameError("Invalid Input");
        doesErrorOccured = true;
    }

    if (!creds.email) {
        setEmailError("This feild is required");
        doesErrorOccured = true;
    } else if (!emailRegEx.test(creds.email)) {
        setEmailError("Invalid Input");
        doesErrorOccured = true;
    }

    if (!creds.phone) {
        setPhoneError("This feild is required");
        doesErrorOccured = true;
    } else if (!phoneRegEx.test(creds.phone)) {
        setPhoneError("Invalid Input");
        doesErrorOccured = true;
    }

    return !doesErrorOccured;
};

export default validateForm;
