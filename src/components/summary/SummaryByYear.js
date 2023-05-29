import React, { useState} from 'react';
import Month from './Month';

function SummaryByYear(props) {
    const options = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let year = 2023; year <= 2030; year++) {
        options.push(<option key={year} value={year}>{year}</option>);
    }

    const changeCurrentYear = (evt) => {
        props.onCurrentYearChange(Number(evt.target.value));
    }

    const expensesInEachMonth = [];
    for (let month of months) {
        expensesInEachMonth.push(props.totalExpenses.filter((eachExpense) => {
            return (new Date(eachExpense.date)).toLocaleString('en-US', { month: 'short' }) === month
        }))
    }
    
    const numbers = [];
    for (let eachMonth of expensesInEachMonth) {
        let totalAmount = 0;
        for (let i = 0; i < eachMonth.length; i++) {
            totalAmount = totalAmount + eachMonth[i].amount;
        }
        numbers.push(totalAmount);
    }

    let i = -1;

    return (
        <div className="SummaryByYear">
            <div className="Summary-Filter">
                <label htmlFor="year">Filter by year</label>
                <select id="year" onChange={changeCurrentYear}>
                    {options}
                </select>
            </div>
            <div className="Summary-Body">
                {months.map((eachMonth) => {
                    i++;
                    return <Month key={eachMonth} month={eachMonth} totalExpense={numbers[i]} onCurrentMonthChange={props.onCurrentMonthChange} />
                })}
            </div>
        </div>
    );
}

export default SummaryByYear;