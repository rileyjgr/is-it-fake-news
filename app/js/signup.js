// sign up form logic
'use strict';

const signup = document.getElementById("sign-up");



signup.onclick = () => {
    const name            = document.getElementById('name').value;
    const email           = document.getElementById('email').value;
    const username        = document.getElementById('username').value;
    const password        = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm').value;
    const data = {
        name: '',
        email: '',
        username: '',
        password: ''
    };

    let isOkay = '';
    const confirm = () => {
        if(password === confirmPassword){
            isOkay = true;
            return isOkay;
        } else {
            isOkay = false;
            return isOkay;
        }
    };
    const signUpUser = () => {
        const url = '/users/signup';
        axios.post(url, data)
            .then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            });
    };

    confirm();
    if (isOkay === true){
        data.name = name;
        data.email = email;
        data.username = username;
        data.password = password;
        console.log(data);
        signUpUser();
    }

    if(isOkay === false) {
        console.log('your password does not match');
    }
};