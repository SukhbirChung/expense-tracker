import React, { Component } from 'react';
import './AddExpense.css';

class RenderAddExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    state = {
        expenseDate: '',
        expenseType: '',
        expensePrice: ''        
    }

    inputChangeHandler(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    submitHandler(evt) {
        evt.preventDefault();
        this.props.submit(this.state);
        this.setState({
            expenseDate: '',
            expenseType: '',
            expensePrice: ''
        })
    }

    render() {
        return (
            <form className="AddExpense-Form" onSubmit={ this.submitHandler}>
                <div>
                    <label className="AddExpense-Form-Label" htmlFor="title">Title</label>
                    <input className="AddExpense-Form-Input" type="text" id="title" name="expenseType" value={this.state.expenseType} onChange={this.inputChangeHandler} required />
                </div>
                <div>
                    <label className="AddExpense-Form-Label" htmlFor="amount">Amount</label>
                    <input className="AddExpense-Form-Input" type="number" min="0.01" step="0.01" id="amount" name="expensePrice" value={this.state.expensePrice} onChange={this.inputChangeHandler} required />
                </div>
                <div>
                    <label className="AddExpense-Form-Label" htmlFor="date">Date</label>
                    <input className="AddExpense-Form-Input" type="date" min="2023-01-01" max="2030-12-31" id="date" name="expenseDate" value={this.state.expenseDate} onChange={this.inputChangeHandler} required />
                </div>
                <button type="submit" className="AddExpense-Button">Add Expense</button>
            </form>
        );
    }
}

export default RenderAddExpenseForm;