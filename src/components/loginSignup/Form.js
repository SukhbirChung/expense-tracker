import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import formHelper from '../../helpers/formHelper';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = formHelper.stateVariables;

        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    inputChangeHandler(evt) {
        this.setState((currentState) => formHelper.inputChangeHandler(currentState, evt));
    }

    submitHandler(evt) {
        const dataSent = formHelper.submitHandler(evt, this.state);

        if (dataSent) {
            this.setState(formHelper.stateVariables);
        }
        else {
            console.log("Data could not be sent.");
        }
    }

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
                                    <input id="email" type="email" name="email" required value={this.state.email} onChange={this.inputChangeHandler} />
                                </div> :
                                null
                        }                
                        <div className="FormInputWrapper">
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" name="username" required value={this.state.username} onChange={this.inputChangeHandler} />
                        </div>
                        <div className="FormInputWrapper">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" name="password" required minLength="6" maxLength="12" value={this.state.password} onChange={this.inputChangeHandler} />
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