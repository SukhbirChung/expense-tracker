import React, { useState} from 'react';
import Summary from './summary/Summary';
import AddExpense from './crudExpenses/AddExpense';
import Expenses from './expenses/Expenses';
import './UserHomepage.css';

function UserHomepage() {
    const [allExpenses, changeAllExpenses] = useState([]);

    const addExpense = (newExpense) => {
        changeAllExpenses((currentState) => {
            return [...currentState, newExpense];
        })
    }

    const removeExpense = (id) => {
        changeAllExpenses((currentState) => {
            return currentState.filter((expenseToBeKept) => {
                return expenseToBeKept.id !== id;
            });
        })
    }

    return (
        <div className="UserHomepage">
            <h1 className="UserHomepageMainHeading">My Expense Tracker</h1>
            <Summary />
            <AddExpense addExpense={addExpense} />
            {
                allExpenses.length === 0 ? null : <Expenses expensesList={allExpenses} removeExpense={removeExpense}/>
            }            
        </div>
    );
}

export default UserHomepage;