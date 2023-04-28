import React, { Component } from 'react';
import Option from './Option';
import Month from './Month';
import './Summary.css';

class Summary extends Component {
    constructor(props) {
        super(props);
        this.selectYearHandler = this.selectYearHandler.bind(this);
    }

    selectYearHandler(evt) {
        this.props.selectYear(evt.target.value);
    }

    render() {
        const options = [];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        for (let year = 2023; year <= 2030; year++) {
            options.push(<Option key={ year} year={year} />);
        }

        return (
            <div className="Summary">
                <div className="Summary-HeadingContainer">
                    <h2 className="Summary-Heading">Summary</h2>
                    <div className="Summary-Filter">
                        <label htmlFor="year">Filter by year</label>
                        <select id="year" name="year" onChange={this.selectYearHandler}>
                            {options}
                        </select>
                    </div>
                </div>
                <div className="Summary-Body">
                    {months.map((eachMonth) => {
                        //console.log(this.props.allExpenses);
                        let currentExpensePrice = 0;
                        const listOfExpensesInMonth = this.props.allExpenses.filter((expense) => {
                            return (expense.expenseDate.toLocaleString('en-US', { month: 'short' }) === eachMonth);
                        })
                        //console.log(listOfExpensesInMonth);
                        for (let i = 0; i < listOfExpensesInMonth.length; i++) {
                            //console.log(listOfExpensesInMonth[i].expensePrice);
                            currentExpensePrice += listOfExpensesInMonth[i].expensePrice;
                            //console.log(currentExpensePrice)
                        }
                        return <Month key={eachMonth} month={eachMonth} totalExpense={currentExpensePrice} />
                    })}
                </div>
            </div>
        );
    }
}

export default Summary;
        //const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        //let listOfExpensesInMonth = [];
        //let totalExpensesInMonth = [];

        //for (num = 0; num < 12; num++) {
        //    listOfExpensesInMonth = currentYearExpenses.filter((expense) => {
        //        return expense.expenseDate.toLocaleString('en-US', { month: 'short' }) === months[num];
        //    });
        //    listOfExpensesInMonth.map((expense) => {
        //        return expense.expensePrice + totalExpensesInMonth[num];
        //    })
        //}


        //console.log(totalExpenses);