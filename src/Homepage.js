import React, { Component } from 'react';
import './Homepage.css';
import MainHeading from './components/MainHeading';
import AddExpense from './components/crudExpenses/AddExpense';
import Expenses from './components/expenses/Expenses';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.addNewExpense = this.addNewExpense.bind(this);
    }

    state = {
        allExpenses: []
    }

    addNewExpense(newExpense) {
        const expenseDate = (newExpense.expenseDate) + "T00:00:00";
        const myDate = new Date(expenseDate);
        this.setState(currentState => {
            return { allExpenses: [...currentState.allExpenses, { expenseDate: myDate, expenseType: newExpense.expenseType, expensePrice: Number(newExpense.expensePrice) }] }
        })
    }

    render() {
        return (
            <div className="Homepage">
                <MainHeading />
                <AddExpense submit={this.addNewExpense} />
                <Expenses allExpenses={this.state.allExpenses} />
            </div>
        );
    }
}

export default Homepage;