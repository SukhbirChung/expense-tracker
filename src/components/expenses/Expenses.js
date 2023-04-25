import React, { Component } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

class Expenses extends Component {
    render() {
        const allExpenses = this.props.allExpenses;
        return (
            <div className="Expenses">
                {allExpenses.reverse().map(
                    (eachExpense) => {
                        return <ExpenseItem expenseDetails={eachExpense} />
                    }
                )}
            </div>
        );
    }
}

export default Expenses;
