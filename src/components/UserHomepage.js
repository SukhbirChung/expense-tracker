import React, { useState } from 'react';
import { initialExpenses } from '../helpers/initialExpenses';
import Summary from './summary/Summary';
import AddExpense from './crudExpenses/AddExpense';
import Expenses from './expenses/Expenses';
import './UserHomepage.css';

function UserHomepage() {
    const [allExpenses, changeAllExpenses] = useState(initialExpenses);
    const [currentYear, changeCurrentYear] = useState(2023);

    const getCurrentYearExpenses = (year) => {
        return (allExpenses.filter((eachExpense) => {
            return (new Date(eachExpense.date)).getFullYear() === year;
        }))
    }

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

    const changeCurrentYearHandler = (year) => {
        changeCurrentYear(year);
    }

    return (
        <div className="UserHomepage">
            <h1 className="UserHomepageMainHeading">My Expense Tracker</h1>
            <Summary currentYear={currentYear} expensesList={getCurrentYearExpenses(currentYear)} onCurrentYearChange={changeCurrentYearHandler }/>
            <AddExpense addExpense={addExpense} />
            {
                getCurrentYearExpenses(currentYear).length === 0 ?
                    <div style={{ marginBottom: "1rem", textAlign: "center", fontWeight:"bold" }}>
                        No Expenses added in current year
                    </div> :
                    <Expenses expensesList={getCurrentYearExpenses(currentYear)} removeExpense={removeExpense} />
            }            
        </div>
    );
}

export default UserHomepage;