import React, { Component } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

class Expenses extends Component {
    constructor(props) {
        super(props);
        this.removeExpense = this.removeExpense.bind(this);
    }    

    removeExpense(id) {
        this.props.remove(id);
    }

    render() {
        const allExpenses = this.props.allExpenses;
        return (
            <div className="Expenses">
                {allExpenses.reverse().map(
                    (eachExpense) => {
                        return <ExpenseItem key={eachExpense.id} expenseDetails={eachExpense} remove={ this.removeExpense}/>
                    }
                )}
            </div>
        );
    }
}

export default Expenses;
