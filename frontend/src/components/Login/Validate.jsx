const validate = (inputs) =>{
    const errors = {};
  
    if(inputs.username.length === 0 || inputs.username === null){
        errors.usernameError = true;
    }

    if(inputs.password.length === 0 || inputs.password === null){
        errors.passwordError = true;
    }

    return errors;
}

export default validate;
