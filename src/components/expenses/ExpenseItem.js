import React, { Component } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

class ExpenseItem extends Component {
    constructor(props) {
        super(props);
        this.removeExpense = this.removeExpense.bind(this);
    }

    removeExpense() {
        this.props.remove(this.props.expenseDetails.id);
    }

    render() {
        const expenseDetails = this.props.expenseDetails;
        return (
            <div className="ExpenseItemWrapper">
                <div className="RemoveExpense">
                    <button onClick={ this.removeExpense}>X</button>
                </div>
                <div className="ExpenseItem">
                    <ExpenseDate expenseDate={expenseDetails.expenseDate} />
                    <div className="ExpenseItem-Description">
                        <h2 className="ExpenseItem-Type">{expenseDetails.expenseType}</h2>
                        <div className="ExpenseItem-Price">$ {expenseDetails.expensePrice.toFixed(2)}</div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default ExpenseItem;
