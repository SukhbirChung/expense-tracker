import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    state = {
        email: '',
        username: '',
        password: ''
    }

    inputChangeHandler(evt) {
        this.setState((currentState) => {
            return { ...currentState, [evt.target.name]: evt.target.value };
        });
    }

    submitHandler(evt) {
        evt.preventDefault();
        this.setState({
            email: '',
            username: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="FormContainer">
                <h1>{this.props.formType}</h1>
                <form className="Form" onSubmit={ this.submitHandler}>
                    {
                        this.props.formType === 'Sign Up' ?
                            <div className="Form-InputWrapper">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" value={this.state.email} name="email" required onChange={ this.inputChangeHandler} />
                            </div> :
                            null
                    }                
                    <div className="Form-InputWrapper">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" value={this.state.username} name="username" required onChange={this.inputChangeHandler}/>
                    </div>
                    <div className="Form-InputWrapper">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" value={this.state.password} name="password" required onChange={this.inputChangeHandler} minLength="6" maxLength="12" />
                    </div>
                    <button className="Form-SubmitButton">{(this.props.formType).toUpperCase()}</button>
                </form>
                {
                    this.props.formType === 'Sign Up' ?
                        <Link className="Link" to="/">LOGIN</Link> :
                        <Link className="Link" to="/signup">SIGN UP</Link>
                }
            </div>
        );
    }
}

export default Form;