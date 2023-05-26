import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    const removeExpense = (id) => {
        props.removeExpense(id);
    }

    return (
        <div className="Expenses">            
            {props.expensesList.map(
                (eachExpense) => {
                    return <ExpenseItem key={eachExpense.id} expenseDetails={eachExpense} removeExpense={removeExpense}/>
                }
            )}
        </div>
    );
}

export default Expenses;
