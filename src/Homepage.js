import React, { Component } from 'react';
import './Homepage.css';
import MainHeading from './components/MainHeading';
import AddExpense from './components/crudExpenses/AddExpense';
import Expenses from './components/expenses/Expenses';

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <MainHeading />
                <AddExpense />
                <Expenses />
            </div>
        );
    }
}

export default Homepage;