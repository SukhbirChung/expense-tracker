import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const expenseDetails = props.expenseDetails;

    const removeExpense = () => {
        props.removeExpense(props.expenseDetails.id);
    }

    return (
        <div className="ExpenseItemWrapper">
            <div className="RemoveExpense">
                <button onClick={removeExpense}>X</button>
            </div>
            <div className="ExpenseItem">
                <ExpenseDate expenseDate={expenseDetails.date} />
                <div className="ExpenseItem-Description">
                    <h4 className="ExpenseItem-Title">{expenseDetails.title}</h4>
                    <div className="ExpenseItem-Amount">$ {expenseDetails.amount}</div>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
