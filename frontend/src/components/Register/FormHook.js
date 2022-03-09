import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const formHook = (inputValues, validate) => {
    const [inputs, setInputs] =  useState(inputValues);
    const [errors, setErrors] =  useState({});
    const [success, setSuccess] = useState(false);

    // useEffect(()=>{
    //    console.log(inputs); 
    // },[inputs])

    const navigate = useNavigate();

    const handleLogin = (e) =>{
        navigate("../login");
    }

    const handleRegistration = (e) => {
        const errorsFound = validate(inputs);
        setErrors(errorsFound);
        const hasErrors = Object.keys(errors).length === 0;

        const timeout = (delay) => {
            return new Promise( res => setTimeout(res, delay) );
        }

        if(!hasErrors){
            axios.post("http://localhost:3000/user/register",
            {
                username: inputValues.username,
                password: inputValues.password,
                email:    inputValues.email
            })
            .then(async (response) =>  {
                setSuccess(true);
                await timeout(5000);
                navigate("../login");
            })
            .catch(error => setSuccess(false));
        }
    }
    const handleInputChange = (e) => {
        setInputs(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }
    return{
        handleRegistration,
        handleInputChange,
        handleLogin,
        errors,
        success
    }
}

export default formHook;
