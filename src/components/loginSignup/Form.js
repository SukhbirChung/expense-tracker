import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

class Form extends Component {
    //constructor(props) {
    //    super(props);

    //    this.formType = this.props.formType;
    //    if (this.formType === 'Sign Up') {
    //        this.test = <div>Already have an account?<br /> <Link className="Link" to="/login">LOGIN</Link></div>
    //    }


    //    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    //    this.submitHandler = this.submitHandler.bind(this);
    //}

    //state = {
    //    email: '',
    //    username: '',
    //    password: ''
    //}

    //inputChangeHandler(evt) {
    //    this.setState((currentState) => {
    //        return { ...currentState, [evt.target.name]: evt.target.value };
    //    });
    //}

    //submitHandler(evt) {
    //    evt.preventDefault();
    //    this.setState({
    //        email: '',
    //        username: '',
    //        password: ''
    //    });
    //}

    render() {
        return (
            <div className="FormBackground">
                <div className="FormContainer">
                    <h1>{this.props.formType}</h1>
                    <form className="Form" onSubmit={this.submitHandler}>
                        {
                            this.props.formType === 'Sign Up' ?
                                <div className="FormInputWrapper">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" name="email" required />
                                </div> :
                                null
                        }                
                        <div className="FormInputWrapper">
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" name="username" required />
                        </div>
                        <div className="FormInputWrapper">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" name="password" required minLength="6" maxLength="12" />
                        </div>
                        <button className="FormSubmitButton">{(this.props.formType).toUpperCase()}</button>
                    </form>
                    {
                        this.props.formType === 'Sign Up' ?
                            <div style={{ textAlign:"center" }}>
                                Already have an account ?<br />
                                <Link className="Link LoginLink" to="/login">Login</Link>
                            </div> :
                            <Link className="Link SignupLink" to="/signup">Create new account</Link>
                    }
                </div>
            </div>
        );
    }
}

export default Form;