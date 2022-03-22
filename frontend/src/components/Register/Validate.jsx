const validate = (inputs) =>{
    const errors = {};
    console.log(inputs);

    if(inputs.email.length === 0){
        errors.emailError = true;
    }

    if(inputs.username.length === 0){
        errors.usernameError = true;
    }

    if(inputs.password.length === 0){
        errors.passwordError = true;
    }

    if(inputs.password !== inputs.confirm_password){
        errors.confirmpasswordError = true;
    }

    return errors;
}

export default validate;
