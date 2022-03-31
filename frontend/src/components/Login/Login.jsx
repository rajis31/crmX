import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "wouter";
import { setCookie, generateUrl } from "../../Helpers/Helpers";


const formHook = (inputValues, validate) => {
    const [inputs, setInputs] = useState(inputValues);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState();

    const handleLogin = (e) => {
        const errorsFound = validate(inputs);
        setErrors(errorsFound);
        const hasErrors = Object.keys(errorsFound).length > 0;

        const handleLoginCookie = async (name, value, days) => {
            setCookie(name, value, days);
        }

        if (!hasErrors) {
            axios.post(generateUrl("user/login"),
                {
                    username: inputs.username,
                    password: inputs.password,
                })
                .then(async (response) => {

                    if (response.status === 200) {
                        if(response.data?.found ){
                            await handleLoginCookie("session_id", response.data?.session_id, 30);

                            let protocal = window.location.protocol;
                            let hostname = window.location.host;
                            window.location.href=protocal+"//"+hostname+"/";
                        }
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
