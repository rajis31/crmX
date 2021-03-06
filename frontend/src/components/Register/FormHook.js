import { useState } from "react";
import axios from "axios";
import { useLocation } from "wouter";
import { generateUrl } from "../../Helpers/Helpers";

const formHook = (inputValues, validate) => {
    const [inputs, setInputs] = useState(inputValues);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [location, setLocation] = useLocation();

    const handleLogin = (e) => {
        setLocation("/login");
    }

    const handleRegistration = async (e) => {
        const errorsFound = await validate(inputs);
        setErrors(errorsFound);
        const hasErrors = Object.keys(errorsFound).length > 0;

        const timeout = (delay) => {
            return new Promise(res => setTimeout(res, delay));
        }

        if (!hasErrors) {
            axios.post(generateUrl("user/register"),
                {
                    username: inputs.username,
                    password: inputs.password,
                    email: inputs.email
                })
                .then(async (response) => {
                    setSuccess(true);
                    await timeout(5000);
                    setLocation("/login");
                })
                .catch(error => setSuccess(false));
        }
    }
    const handleInputChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }
    return {
        handleRegistration,
        handleInputChange,
        handleLogin,
        errors,
        success
    }
}

export default formHook;
