import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Topbar from './components/loginSignup/Topbar';
import MainHeading from './components/MainHeading';
import AddExpense from './components/crudExpenses/AddExpense';
import Summary from './components/summary/Summary';
import Expenses from './components/expenses/Expenses';
import './Homepage.css';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.addNewExpense = this.addNewExpense.bind(this);
        this.removeExpense = this.removeExpense.bind(this);
        this.selectYear = this.selectYear.bind(this);
    }

    state = {
        allExpenses: [
            {
                id: uuidv4(),
                expenseDate: new Date("2023-01-01T00:00:00"),
                expenseType: "Shoes",
                expensePrice: 78.56
            },
            {
                id: uuidv4(),
                expenseDate: new Date("2023-07-04T00:00:00"),
                expenseType: "Groceries",
                expensePrice: 210.98
            },
            {
                id: uuidv4(),
                expenseDate: new Date("2024-02-08T00:00:00"),
                expenseType: "Gas",
                expensePrice: 65.77
            },
            {
                id: uuidv4(),
                expenseDate: new Date("2024-08-12T00:00:00"),
                expenseType: "New Table",
                expensePrice: 350.98
            },
            {
                id: uuidv4(),
                expenseDate: new Date("2025-03-16T00:00:00"),
                expenseType: "Walmart",
                expensePrice: 88.54
            },
            {
                id: uuidv4(),
                expenseDate: new Date("2026-04-20T00:00:00"),
                expenseType: "Clothes",
                expensePrice: 545.45
            }
        ],
        currentYear: 2023
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

    selectYear(selectedYear) {
        this.setState({
            currentYear: Number(selectedYear)
        })
    }

    render() {
        const currentYearExpenses = this.state.allExpenses.filter((expense) => {
            return expense.expenseDate.getFullYear() === this.state.currentYear;
        });

        return (
            <div className="Homepage">
                {/*<Topbar />*/}
                <MainHeading />
                <AddExpense submit={this.addNewExpense} />
                <Summary selectYear={this.selectYear} allExpenses={currentYearExpenses}/>
                <Expenses allExpenses={currentYearExpenses} remove={this.removeExpense} />
            </div>
        );
    }
}

export default Homepage;