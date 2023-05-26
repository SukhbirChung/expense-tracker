import React, { useState} from 'react';
import './AddExpense.css';
import RenderAddExpenseForm from './RenderAddExpenseForm';

function AddExpense(props) {
    let [displayForm, changeDisplayForm] = useState(false);

    const renderAddExpenseForm = () => {
        changeDisplayForm(true);
    }

    const submitExpense = (newExpense) => {
        changeDisplayForm(false);
        if (newExpense === 'cancel') { }
        else { props.addExpense(newExpense);}        
    }

    return (
        <div className="AddExpense">
            {
                displayForm ?
                    <RenderAddExpenseForm sendExpense={ submitExpense}/> :
                    <button className="AddExpense-Button" onClick={renderAddExpenseForm}>Add Expense</button>
            }
        </div>
    );
}

export default AddExpense;