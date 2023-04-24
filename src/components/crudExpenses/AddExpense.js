import React, { Component } from 'react';
import './CRUDExpenses.css';

class AddExpense extends Component {
    constructor(props) {
        super(props);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    state = {
        title: '',
        amount: '',
        date: ''
    }

    inputChangeHandler(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    render() {
        return (
            <div className="AddExpense">
                <form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" value={this.state.title} onChange={this.inputChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" step="0.01" id="amount" name="amount" value={this.state.amount} onChange={this.inputChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" value={this.state.date} onChange={this.inputChangeHandler} />
                    </div>
                    <button type="submit">Add Expense</button>
                </form>
            </div>
        );
    }
}

export default AddExpense;