import React, { Component } from 'react';
import './AddExpense.css';
import RenderAddExpenseForm from './RenderAddExpenseForm';

class AddExpense extends Component {
    constructor(props) {
        super(props);
        this.renderAddExpenseForm = this.renderAddExpenseForm.bind(this);
        this.addNewExpense = this.addNewExpense.bind(this);
    }

    state = {
        displayForm: false
    }

    renderAddExpenseForm() {
        this.setState({
            displayForm: true
        });
    }

    addNewExpense(newExpense) {
        this.props.submit(newExpense);
        this.setState({
            displayForm: false
        })
    }

    render() {
        return (
            <div className="AddExpense">
                {this.state.displayForm ?
                    <RenderAddExpenseForm submit={this.addNewExpense} /> :
                    <button className="AddExpense-Button" onClick={this.renderAddExpenseForm}>Add Expense</button>
                }
            </div>
        );
    }
}

export default AddExpense;