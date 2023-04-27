import React, { Component } from 'react';
import MainHeading from './components/MainHeading';
import AddExpense from './components/crudExpenses/AddExpense';
import Expenses from './components/expenses/Expenses';
import { v4 as uuidv4 } from 'uuid';
import './Homepage.css';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.addNewExpense = this.addNewExpense.bind(this);
        this.removeExpense = this.removeExpense.bind(this);
    }

    state = {
        allExpenses: [
            {
                id: uuidv4(),
                expenseDate: new Date("2023-01-12T00:00:00"),
                expenseType: "Shoes",
                expensePrice: 78.56
            },
            {
                id: uuidv4(),
                expenseDate: new Date("2023-02-08T00:00:00"),
                expenseType: "Groceries",
                expensePrice: 210.98
            }
        ]
    }

    addNewExpense(newExpense) {
        const expenseDate = (newExpense.expenseDate) + "T00:00:00";
        const myDate = new Date(expenseDate);
        this.setState(currentState => {
            return { allExpenses: [...currentState.allExpenses, { id: uuidv4(), expenseDate: myDate, expenseType: newExpense.expenseType, expensePrice: Number(newExpense.expensePrice) }] }
        });
    }

    removeExpense(id) {
        this.setState((currentState) => {
            return {
                allExpenses: currentState.allExpenses.filter((expenseToBeKept) => {
                    return expenseToBeKept.id !== id;
                })
            }
        })
    }

    render() {
        return (
            <div className="Homepage">
                <MainHeading />
                <AddExpense submit={this.addNewExpense} />
                <Expenses allExpenses={this.state.allExpenses} remove={this.removeExpense} />
            </div>
        );
    }
}

export default Homepage;

//import { Routes, Route } from 'react-router-dom';
//import Form from './components/loginSignup/Form';

{/*<Routes>*/ }
{/*    <Route path="/" element={<Form formType="Login" />} />*/ }
{/*    <Route path="/signup" element={<Form formType="Sign Up" />} />*/ }
{/*</Routes>*/ }

    




