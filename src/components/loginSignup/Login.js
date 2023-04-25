import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="LoginFormContainer">
                <h1>Login</h1>
                <form className="LoginForm">
                    <div className="LoginForm-InputWrapper">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" />
                    </div>
                    <div className="LoginForm-InputWrapper">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" />
                    </div>
                    <button className="LoginForm-SubmitButton">LOGIN</button>
                </form>
                <div className="signupLink">
                    SIGN UP
                </div>
            </div>
        );
    }
}

export default Login;