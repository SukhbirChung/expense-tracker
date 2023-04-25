import React, { Component } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

class ExpenseItem extends Component {
    render() {
        const expenseDetails = this.props.expenseDetails;
        return (
            //<div className="ExpenseItem">
            //    <div className="ExpenseItem-Description">
            //        <ExpenseDate expenseDate={expenseDetails.expenseDate} />
            //        <h2 className="ExpenseItem-Type">{expenseDetails.expenseType}</h2>
            //    </div>
            //    <div className="ExpenseItem-Price">$ {expenseDetails.expensePrice.toFixed(2)}</div>
            //</div>
            <div className="ExpenseItem">
                <ExpenseDate expenseDate={expenseDetails.expenseDate} />
                <div className="ExpenseItem-Description">
                    <h2 className="ExpenseItem-Type">{expenseDetails.expenseType}</h2>
                    <div className="ExpenseItem-Price">$ {expenseDetails.expensePrice.toFixed(2)}</div>
                </div>                
            </div>
        );
    }
}

export default ExpenseItem;
