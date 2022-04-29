import axios from "axios";
import { generateUrl } from "../../Helpers/Helpers";

const validate = async (inputs) => {
    const errors = {};
    console.log(inputs);

    if (inputs.email.length === 0 || inputs.email === null) {
        errors.emailError = true;
    }

    if (inputs.username.length === 0 || inputs.username.length === null) {
        errors.usernameError = true;
    }

    if (inputs.password.length === 0 || inputs.password === null) {
        errors.passwordError = true;
    }

    if (inputs.password !== inputs.confirm_password ||
        (inputs.password.length === 0 || inputs.confirm_password.length === 0)) {
        errors.confirmpasswordError = true;
    }

    // Check if username exists 
    let usernameCheck = await axios.post(generateUrl("user/check_username"),
        { username: inputs.username });

    if (usernameCheck.data.found) {
        errors.userNameCheckError = true;
    }

    return errors;
}

export default validate;
