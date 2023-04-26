import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/loginSignup/Form';
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <Routes>
                    <Route path="/" element={<Form formType="Login" />} />
                    <Route path="/signup" element={<Form formType="Sign Up" />} />
                </Routes>
            </div>
        );
    }
}

export default Homepage;

    //constructor(props) {
    //    super(props);
    //    this.addNewExpense = this.addNewExpense.bind(this);
    //}

    //state = {
    //    allExpenses: []
    //}

    //addNewExpense(newExpense) {
    //    const expenseDate = (newExpense.expenseDate) + "T00:00:00";
    //    const myDate = new Date(expenseDate);
    //    this.setState(currentState => {
    //        return { allExpenses: [...currentState.allExpenses, { expenseDate: myDate, expenseType: newExpense.expenseType, expensePrice: Number(newExpense.expensePrice) }] }
    //    })
    //}
//import MainHeading from './components/MainHeading';
//import AddExpense from './components/crudExpenses/AddExpense';
//import Expenses from './components/expenses/Expenses';
//<div className="Homepage">
//{<MainHeading /> }
//{<AddExpense submit={this.addNewExpense} /> }
//{<Expenses allExpenses={this.state.allExpenses} /> }
//{</div> }
