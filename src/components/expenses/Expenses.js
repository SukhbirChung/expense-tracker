import React, { Component } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

class Expenses extends Component {
    render() {
        const allExpenses = [
            {
                expenseDate: new Date(2020, 11, 10),
                expenseType: 'Groceries',
                expensePrice: 210.55
            },
            {
                expenseDate: new Date(2021, 10, 9),
                expenseType: 'Walmart',
                expensePrice: 150.65
            },
            {
                expenseDate: new Date(2021, 3, 23),
                expenseType: 'Gas',
                expensePrice: 64.65
            },
            {
                expenseDate: new Date(2023, 6, 1),
                expenseType: 'Dollarstore',
                expensePrice: 58.001
            }
        ];
        return (
            <div className="Expenses">
                {allExpenses.map(
                    (eachExpense) => {
                        return <ExpenseItem expenseDetails={eachExpense} />
                    }
                )}
            </div>
        );
    }
}

export default Expenses;
