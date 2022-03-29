import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "wouter";
import { getCookie, setCookie } from "../../Helpers/Helpers";


const formHook = (inputValues, validate) => {
    const [inputs, setInputs] = useState(inputValues);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState();
    const [location, setLocation] = useLocation();


    useEffect(() => {
        console.log(success);
    }, [success]);



    const handleLogin = (e) => {
        const errorsFound = validate(inputs);
        setErrors(errorsFound);
        const hasErrors = Object.keys(errorsFound).length > 0;

        const handleLoginCookie = (name, value, days) => {
            setCookie(name, value, days);
        }

        if (!hasErrors) {
            axios.post("http://localhost:3000/user/login",
                {
                    username: inputs.username,
                    password: inputs.password,
                })
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        response.data?.found ? 
                                handleLoginCookie("session_id", response.data?.session_id, 30) :
                                 "";
                        setLocation("/");
                    } else {
                        setSuccess(false);
                    }
                })
                .catch(error => { setSuccess(false)  });
        }
    }

    const handleInputChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    return {
        handleInputChange,
        handleLogin,
        errors,
        success
    }
}

export default formHook;
