import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
    const expenseDate = new Date(props.expenseDate);
    return (
        <div className="ExpenseDate">
            <div className="ExpenseDate-Month">{expenseDate.toLocaleString('en-US', { month: 'long' })}</div>
            <div className="ExpenseDate-Year">{expenseDate.getFullYear()}</div>
            <div className="ExpenseDate-Day">{expenseDate.toLocaleString('en-US', { day: '2-digit' })}</div>
        </div>
    );
}

export default ExpenseDate;
